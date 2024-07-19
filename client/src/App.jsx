import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Login from './pages/Login'
import Layout from './Layout.jsx'
import Register from './pages/Register.jsx'
import axios from 'axios'
import { UserContextProvider } from './Context/UserContext.jsx'
import { useEffect } from 'react'
import ProfilePage from './pages/ProfilePage.jsx'
import PlacesPage from './pages/PlacesPage.jsx'
import PlacesFormPage from './pages/PlacesForm.jsx'
import PlacePage from './pages/Place.jsx'
import BookingsPage from './pages/BookingsPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import Listing from './pages/Listing.jsx'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
function App() {

  
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/places" element={<Listing />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
   
      )
}

export default App
