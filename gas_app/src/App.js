import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homescreen from "./components/Homescreen";
import Login from "./components/Login";
import Register from "./components/Register";
// import Admin from "./components/Admin";
import AdminPanel from "./components/AdminPanel";
import NewConnection from "./components/NewConnection";
import GasTypeBooking from "./components/GasTypeBooking";
import Inventory from "./components/Inventory";
import BookingScreen from "./components/BookingScreen";
// import ManageBooking from "./components/ManageBooking";
import Profile from "./components/Profile";
import MyBooking from "./components/MyBooking";
import ManageUser from "./components/Userbooking";
import AllUser from "./components/AllUser";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Gas Boking System</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Homescreen />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          {/* <Route path="/admin" exact element={<Admin />} /> */}
          {/* <Route path="/" exact element={<AdminPanel />} /> */}
          <Route path="/newConnection" exact element={<NewConnection />} />
          <Route path="/booking" exact element={<GasTypeBooking />} />
          <Route path="/inventory" exact element={<Inventory />} />
          <Route path="/book/:gasid" exact element={<BookingScreen />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/mybooking" exact element={<MyBooking />} />
          <Route path="/userbooking" exact element={<ManageUser />} />
          <Route path="/allUser" exact element={<AllUser />} />
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
