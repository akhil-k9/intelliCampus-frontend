import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./api.js";

const InchargeDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState({}); // track per request action

  // Fetch requests
  const fetchRequests = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API_URL}/request/incharge`);
      setRequests(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Accept or Reject request
  const handleAction = async (requestId, action) => {
    setActionLoading((prev) => ({ ...prev, [requestId]: true }));
    try {
      const url =
        action === "accepted"
          ? `${API_URL}/approve?requestId=${requestId}&role=incharge`
          : `${API_URL}/reject?requestId=${requestId}&role=incharge`;

      await axios.get(url);

      // Update local state
      setRequests((prev) =>
        prev.map((r) =>
          r._id === requestId ? { ...r, inchargeApproval: action } : r
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update request.");
    } finally {
      setActionLoading((prev) => ({ ...prev, [requestId]: false }));
    }
  };

  const renderRequest = (req) => (
    <div key={req._id} style={styles.card}>
      <div style={styles.header}>
        <span style={styles.requestId}>Request ID: {req._id}</span>
        <span
          style={{
            ...styles.badge,
            backgroundColor:
              req.inchargeApproval === "pending"
                ? "#f0ad4e"
                : req.inchargeApproval === "accepted"
                ? "#5cb85c"
                : "#d9534f",
          }}
        >
          {req.inchargeApproval.toUpperCase()}
        </span>
      </div>

      {/* Student Details */}
      {req.Student?.length > 0 && (
        <div style={styles.studentDetails}>
          {req.Student.map((s) => (
            <div key={s._id} style={styles.studentCard}>
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>Roll No:</strong> {s.rollno}</p>
              <p><strong>Year:</strong> {s.year}</p>
              <p><strong>Branch:</strong> {s.branch.toUpperCase()}</p>
              <p><strong>Section:</strong> {s.section.toUpperCase()}</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${s.email}`} style={styles.link}>
                  {s.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${s.phoneno}`} style={styles.link}>
                  {s.phoneno}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}

      <p><strong>Request:</strong> {req.request}</p>
      <p><strong>HOD Approval:</strong> {req.hodApproval}</p>
      <p><strong>Created At:</strong> {new Date(req.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(req.updatedAt).toLocaleString()}</p>

      {req.inchargeApproval === "pending" && (
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.button, backgroundColor: "#5cb85c" }}
            onClick={() => handleAction(req._id, "accepted")}
            disabled={actionLoading[req._id]}
          >
            {actionLoading[req._id] ? "Processing..." : "Accept"}
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#d9534f" }}
            onClick={() => handleAction(req._id, "rejected")}
            disabled={actionLoading[req._id]}
          >
            {actionLoading[req._id] ? "Processing..." : "Reject"}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Incharge Dashboard</h2>
      {loading && <p>Loading requests...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && requests.length === 0 && <p>No requests found.</p>}
      <div style={styles.list}>{requests.map((req) => renderRequest(req))}</div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1976d2",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  requestId: {
    fontWeight: "bold",
  },
  badge: {
    padding: "4px 10px",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "12px",
  },
  studentDetails: {
    backgroundColor: "#eef6ff",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  studentCard: {
    marginBottom: "8px",
    borderBottom: "1px dashed #ccc",
    paddingBottom: "6px",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "500",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "0.3s",
  },
};

export default InchargeDashboard;
