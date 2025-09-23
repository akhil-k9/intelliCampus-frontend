import React, { useState } from "react";
import StdSignup from "../components/StdSignup";
import StdSignin from "../components/StdSignin";
import StdHeader from "../components/StdHeader";

const StdLoginPage = () => {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <>
      <StdHeader />
      <div style={styles.pageContainer}>
        <div style={styles.card}>
          {/* Top tabs */}
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === "signin" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              style={{
                ...styles.tabButton,
                ...(activeTab === "signup" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Tab content */}
          <div style={styles.content}>
            {activeTab === "signin" ? <StdSignin /> : <StdSignup />}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    width: "100vw",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #e8f0fe, #f5f7fa)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#4a90e2",
    borderRadius: "20px 20px 0 0",
  },
  tabButton: {
    flex: 1,
    padding: "14px 0",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  activeTab: {
    backgroundColor: "#357ABD",
    borderBottom: "4px solid #f5a623",
    borderRadius: "20px 20px 0 0",
  },
  content: {
    padding: "30px 25px",
    transition: "all 0.3s ease",
  },
};

export default StdLoginPage;
