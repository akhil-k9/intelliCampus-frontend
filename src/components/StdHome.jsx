import React from 'react';
import { Link } from 'react-router-dom';
const StdHome = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to IntelliCampus</h1>
      <div className="home-main-box">
        <div className="home-box">
          <h3>Permission</h3>
          <button><Link to="/permission" >Go</Link></button>
        </div>
        <div className="home-box">
          <h3>Notes</h3>
          <button>Go</button>
        </div>
        <div className="home-box">
          <h3>AI Suggestions</h3>
          <button><Link to="/ai" >Go</Link></button>
        </div>
        <div className="home-box">
          <h3>Track Requests</h3>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default StdHome;
