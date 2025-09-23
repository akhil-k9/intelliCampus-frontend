import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./api.js";

const StdSignin = () => {
  const [rollno, setRollno] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async () => {
    if (!rollno || !password) {
      setStatus("❌ Roll number and password are required");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(`${API_URL}/std/signin`, {
        rollno: rollno.trim(),
        password: password.trim(),
      });

      setStatus(res.data.message || "✅ Signin successful!");
      localStorage.setItem("studentRollno", res.data.student.rollno);
      localStorage.setItem("studentName", res.data.student.name);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setStatus(err.response.data.error || "❌ Signin failed");
      } else {
        setStatus("❌ Could not connect to server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.formContainer}>
      <input
        type="text"
        placeholder="Enter your roll no"
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleSignin}
        disabled={loading}
        style={styles.button}
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "20px",
  },
  input: {
    width: "100%",
    maxWidth: "380px",
    padding: "14px 16px",
    margin: "12px 0",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  button: {
    width: "100%",
    maxWidth: "380px",
    padding: "14px",
    marginTop: "18px",
    background: "linear-gradient(135deg, #1976d2, #1565c0)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(25,118,210,0.3)",
  },
  status: {
    marginTop: "14px",
    fontSize: "15px",
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
};

export default StdSignin;
