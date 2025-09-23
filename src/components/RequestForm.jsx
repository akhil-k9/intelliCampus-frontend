import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./api"; // e.g., export const API_URL = "http://localhost:5000"

const RequestForm = () => {
  const [rollno, setRollno] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!rollno || !reason) {
      setStatus("⚠️ Please enter roll number and reason");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post(`${API_URL}/request/send`, { rollno, reason ,to:"incharge"});
      setStatus(res.data.message || "✅ Request sent successfully!");
      setRollno("");
      setReason("");
    } catch (err) {
      console.error(err);
      setStatus(err.response?.data?.error || "❌ Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h2>Send Permission Request</h2>
      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Enter Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleSubmit} disabled={loading} style={styles.button}>
        {loading ? "Sending..." : "Send Request"}
      </button>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: '"Segoe UI", sans-serif'
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  textarea: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "200px"
  },
  button: {
    padding: "12px 20px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  status: {
    marginTop: "12px",
    fontWeight: "500"
  }
};

export default RequestForm;
