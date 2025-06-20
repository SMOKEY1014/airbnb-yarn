import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }

  if (!ready) {
    return 'Loading...';
  }
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

 

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
     <AccountNav/>
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button className="primary max-w-sm my-16" onClick={logout}>Logout</button>
        </div>
          )}
          {subpage === 'places' && (<PlacesPage/>)}
    </div>
  );
}