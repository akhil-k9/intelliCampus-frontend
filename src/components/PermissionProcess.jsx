import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./api"; // example: export const API_URL = "http://localhost:5000/api";

const PermissionProcess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", reason: "" });
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState(null);

  // 👉 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/request/send`, formData);
      setRequestId(res.data.requestId); // assuming backend returns an ID
      setStep(2); // Move to review step
    } catch (err) {
      console.error(err);
      alert("Failed to send request.");
    }
    setLoading(false);
  };

  // 👉 Poll backend for status updates
  useEffect(() => {
    if (step > 1 && requestId) {
      const interval = setInterval(async () => {
        try {
          const res = await axios.get(`${API_URL}/request/status/${requestId}`);
          const status = res.data.status; // e.g. "submitted", "reviewed", "granted"

          if (status === "submitted") setStep(2);
          else if (status === "reviewed") setStep(3);
          else if (status === "granted") setStep(4);
        } catch (err) {
          console.error("Error fetching status:", err);
        }
      }, 2000); // check every 2s

      return () => clearInterval(interval);
    }
  }, [requestId, step]);

  return (
    <div className="permission-container">
      <h2>Permission Request Process</h2>

      {/* Stepper UI */}
      <div className="steps">
        <div className={`step ${step >= 2 ? "completed" : step === 1 ? "active" : ""}`}>
          <span>1</span>
          <p>Form Submitted</p>
        </div>
        <div className={`step ${step >= 3 ? "completed" : step === 2 ? "active" : ""}`}>
          <span>2</span>
          <p>Request Review</p>
        </div>
        <div className={`step ${step === 4 ? "completed" : step === 3 ? "active" : ""}`}>
          <span>3</span>
          <p>Permission Granted</p>
        </div>
      </div>

      {/* Step content */}
      {step === 1 && (
        <form onSubmit={handleSubmit} className="permission-form">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Reason for Permission"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      )}

      {step === 2 && <p className="loading">⏳ Request submitted, waiting for review...</p>}
      {step === 3 && <p className="loading">⏳ Request under review...</p>}
      {step === 4 && <p className="success">✅ Permission Granted!</p>}
    </div>
  );
};

export default PermissionProcess;
