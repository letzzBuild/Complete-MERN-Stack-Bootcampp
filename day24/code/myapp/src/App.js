import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider  placement='bottom-center' >
      <Router>
        <div>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
