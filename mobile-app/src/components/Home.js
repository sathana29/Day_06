import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/">MobileApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mt-5">
        <h1>Welcome to Mobile App Development</h1>
        <p>Manage your data efficiently using our mobile app.</p>
        <Link to="/registration" className="btn btn-primary me-2">Register</Link>
        <Link to="/about" className="btn btn-secondary">About</Link>
      </div>
    </>
  );
}

export default Home;
