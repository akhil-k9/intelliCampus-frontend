import React from 'react';
import { Link } from 'react-router-dom';


const StdHeader = () => {
  return (
    <header className="header">
      <div className="header-logo">
        IntelliCampus
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/permission" className="nav-link">Permission</Link>
        <Link to="/" className="nav-link">Notes</Link>
        <Link to="/ai" className="nav-link">AI Suggestions</Link>
        <Link to="/" className="nav-link">Track Requests</Link>
        <Link to="/login" className="nav-link login-btn">Login</Link>
      </nav>
    </header>
  );
}

export default StdHeader;
