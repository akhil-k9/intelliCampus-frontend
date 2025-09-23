// import React from 'react';
// import { Link } from 'react-router-dom';
// const StdHome = () => {
//   return (
//     <div className="home">
//       <h1 className="home-title">Welcome to IntelliCampus</h1>
//       <div className="home-main-box">
//         <div className="home-box">
//           <h3>Permission</h3>
//           <button><Link to="/permission" >Go</Link></button>
//         </div>
//         <div className="home-box">
//           <h3>Notes</h3>
//           <button><Link to="/notes" >Go</Link></button>
//         </div>
//         <div className="home-box">
//           <h3>AI Suggestions</h3>
//           <button><Link to="/ai" >Go</Link></button>
//         </div>
//         <div className="home-box">
//           <h3>Track Requests</h3>
//           <button><Link to="/track">Go</Link></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StdHome;




import React from 'react';
import { Link } from 'react-router-dom';

const StdHome = () => {
  return (
    <div className="home" style={styles.home}>
      <h1 className="home-title" style={styles.title}>
        Welcome to IntelliCampus
      </h1>

      {/* Banner explaining IntelliCampus */}
      <div className="home-banner" style={styles.banner}>
        <p>
          IntelliCampus is your smart campus companion! 🚀<br />
          Manage permissions, access study notes, get AI-based suggestions, and track your requests
          seamlessly — all in one place.
        </p>
      </div>

      <p style={styles.subtitle}>
        Explore the sections below to get started and make the most of your campus experience.
      </p>

      <div className="home-main-box" style={styles.mainBox}>
        <div className="home-box" style={styles.box}>
          <h3>Permission</h3>
          <p>Submit and track leave requests or other permissions easily.</p>
          <button style={styles.button}>
            <Link to="/permission" style={styles.link}>Go</Link>
          </button>
        </div>

        <div className="home-box" style={styles.box}>
          <h3>Notes</h3>
          <p>Access all your class notes and study materials in one place.</p>
          <button style={styles.button}>
            <Link to="/notes" style={styles.link}>Go</Link>
          </button>
        </div>

        <div className="home-box" style={styles.box}>
          <h3>AI Suggestions</h3>
          <p>Get smart study and project suggestions powered by AI.</p>
          <button style={styles.button}>
            <Link to="/ai" style={styles.link}>Go</Link>
          </button>
        </div>

        <div className="home-box" style={styles.box}>
          <h3>Track Requests</h3>
          <p>Monitor the status of your permissions and requests in real-time.</p>
          <button style={styles.button}>
            <Link to="/track" style={styles.link}>Go</Link>
          </button>
        </div>
      </div>
    </div>
  );
};



const styles = {
  home: {
    padding: "20px",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "15px",
    color: "#1976d2",
  },
  banner: {
    backgroundColor: "#e3f2fd",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    fontSize: "1.1rem",
    color: "#333",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "25px",
    color: "#555",
  },
  mainBox: {
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    // gap: "20px",
    // justifyItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "250px",
    textAlign: "center",
  },
  button: {
    marginTop: "12px",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1976d2",
    cursor: "pointer",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default StdHome;
