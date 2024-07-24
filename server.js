const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/User");
const Place = require("./model/Places");
const Booking = require("./model/Booking");
// const BookingModel = require("./model/Booking");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const events = require("events");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
const CookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET || "randomstring";
const API_URL_PROD = process.env.REACT_APP_API_URL_PRODUCTION;
const API_URL_DEV = process.env.REACT_APP_API_URL_DEVELOPMENT;

////////////////// For deployment /////////////////
const path = require("path");
// Serve static files from the 'client/dist' directory
app.use(express.static(path.resolve(__dirname, "./client/dist")));
console.log(__dirname);
// Define a simple route to serve the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
// });
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
});
///////////////////////////////////////////////////

app.use(express.json());
app.use(CookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Increase the maximum number of event listeners to prevent warnings
events.EventEmitter.defaultMaxListeners = 20;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.error("DB connection error:", err));

function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;

      resolve(userData);
    });
  });
}

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(404).json({ error: "User Not found" });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
          // name: userDoc.name
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            console.error("Error generating token:", err);
            return res.status(500).json({ error: "Token generation failed" });
          }
          res.cookie("token", token, { httpOnly: true }).json({ userDoc });
        }
      );
    } else {
      res.status(400).json({ error: "Wrong password" });
    }
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/profile", (req, res) => {
  // res.json({ user: req.user });
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { email, name, _id } = await User.findById(userData.id);
      res.json({ email, name, _id });
    });
  } else {
    res.status(401).json({ error: "Please login" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
  res.json(newName);
});

const photosMiddleware = multer({ dest: "uploads" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];

  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads\\", ""));
  }
  res.json(uploadedFiles);
});

app.post("/places", function (req, res) {
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;

  const { token } = req.cookies;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    photos = addedPhotos;
    const placeDoc = await Place.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    res.json(placeDoc);
  });
});

app.get("/user-places", (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const { id } = userData;
    res.json(await Place.find({ owner: id }));
  });
});

app.get("/places/:id", async (req, res) => {
  const { id } = req.params;
  const results = await Place.findById(id);
  res.json(results);
});

app.delete("/places/:id", async (req, res) => {
  const { token } = req.cookies;
  const { id } = req.params;
  console.log(`Received request to delete place with ID: ${id}`);

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(401).json({ error: "Unauthorized" });
    }
    try {
      const placeDoc = await Place.findById(id);
      if (!placeDoc) {
        console.error(`Place with ID ${id} not found`);
        return res.status(404).json({ error: "Place not found" });
      }
      if (userData.id === placeDoc.owner.toString()) {
        await Place.deleteOne({ _id: id });
        console.log(`Place with ID ${id} deleted successfully`);
        return res.json({ message: "Place deleted successfully" });
      } else {
        console.error(`Unauthorized delete attempt by user ${userData.id}`);
        return res.status(403).json({ error: "Unauthorized" });
      }
    } catch (error) {
      console.error("Error deleting place:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});

app.put("/places", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
        price,
      });
      await placeDoc.save();
      res.json("ok");
    }
  });
});

app.get("/places", async (req, res) => {
  res.json(await Place.find());
});

app.post("/bookings", async (req, res) => {
  const userData = await getUserDataFromToken(req);
  const { place, checkIn, checkOut, numberOfGuests, name, phone, price } =
    req.body;

  Booking.create({
    user: userData.id,
    place,
    checkIn,
    checkOut,
    numberOfGuests,
    name,
    phone,
    price,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(`Error from API : \n ${err}`);
    });
});

app.get("/bookings", async (req, res) => {
  const userData = await getUserDataFromToken(req);
  res.json(await Booking.find({ user: userData.id }).populate("place"));
});

app.get("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const results = await Booking.findById(id);
  res.json(results);
});

app.get("/user-bookings", (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const { id } = userData;
    res.json(await Booking.find({ owner: id }));
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
