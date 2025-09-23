import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./api";

const StdSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    year: "",
    branch: "",
    section: "",
    email: "",
    phoneno: "",
    password: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.rollno || !formData.email || !formData.password) {
      setStatus("⚠️ Please fill all required fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("⚠️ Invalid email format");
      return false;
    }
    if (formData.phoneno.length !== 10) {
      setStatus("⚠️ Phone number must be 10 digits");
      return false;
    }
    if (formData.password.length < 6) {
      setStatus("⚠️ Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validate()) return;

    setLoading(true);
    setStatus("");
    try {
      const res = await axios.post(`${API_URL}/std/signup`, formData);
      setStatus(res.data.message || "✅ Signup successful!");
      localStorage.setItem("studentEmail", formData.email);
    } catch (err) {
      console.error(err);
      setStatus(err.response?.data?.error || "❌ Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const placeholders = {
    name: "Enter Full Name",
    rollno: "Enter Roll Number",
    year: "Enter Year (e.g. 3rd)",
    branch: "Enter Branch (e.g. CSE)",
    section: "Enter Section (e.g. A)",
    email: "Enter Email",
    phoneno: "Enter Phone Number",
    password: "Enter Password"
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.card}>
        <h2 style={styles.title}>Student Signup - IntelliCampus</h2>

        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type={
              field === "password"
                ? "password"
                : field === "email"
                ? "email"
                : field === "phoneno"
                ? "tel"
                : "text"
            }
            name={field}
            placeholder={placeholders[field]}
            value={formData[field]}
            onChange={handleChange}
            style={styles.input}
          />
        ))}

        <button
          onClick={handleSignup}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f4f8, #e3f2fd)",
    fontFamily: '"Segoe UI", sans-serif'
  },
  card: {
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
    width: "95%",
    maxWidth: "420px"
  },
  title: {
    marginBottom: "22px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#1976d2"
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    margin: "10px 0",
    fontSize: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "16px",
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
    marginTop: "15px",
    fontSize: "15px",
    color: "#333",
    fontWeight: "500"
  }
};

export default StdSignup;
