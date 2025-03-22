import React from "react";
import { auth, signOut } from "../firebase-config";  // Import signOut here
import { useNavigate } from "react-router-dom";
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Get the current logged-in user

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user using Firebase
      console.log("User logged out");
      navigate("/");  // Redirect to login page after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </header>

      <section className="dashboard-content">
        {user ? (
          <div className="user-info">
            <h2>Hello, {user.displayName || user.email}</h2>
            <p>Your email: {user.email}</p>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <p>Please log in to see your dashboard.</p>
        )}
      </section>

      <footer className="dashboard-footer">
        <p> </p>
      </footer>
    </div>
  );
};

export default Dashboard;
