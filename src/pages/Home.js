import React from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";
import Register from "./register"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <nav>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Seal_of_Odisha.png/545px-Seal_of_Odisha.png" alt="Odisha Seal" />
        </div>
        <ul className="navbar">
          <li>
          <button onClick={() => navigate("/Admin")}>Admin Login</button>
          </li>
          <li>
          <button onClick={() => navigate("/Login")}>Login</button>
          </li>
          <li>
          <button onClick={() => navigate("/Contact")}>Contact</button>
          </li>
          <li>
          <button onClick={() => navigate("/About")}>About</button>
          </li>
        </ul>
      </nav>

      <div className="header">
        <h1>DRO APPLICATION</h1>
        <p>Powered by Hyperledger Fabric</p>
        <button onClick={() => navigate("/register")}>Get Started</button>
      </div>

      <div className="background-image"></div>
    </div>
  )
};

export default Home;







