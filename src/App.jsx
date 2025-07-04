import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Cart from "./pages/Cart";
import Reserve from "./pages/Reserve";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentPage from "./components/Payment";
import Checkout from "./pages/Payment";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/pay" element={<PaymentPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/reservation" element={<Reserve />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Payment" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
