import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./api"; // update your API base

const RequestStatus = ({ studentId }) => {
  const [student, setStudent] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/request/student/${studentId}`);
        setStudent(res.data.student);
        setRequests(res.data.requests);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch student requests");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [studentId]);

  const statusColor = (status) => {
    switch (status) {
      case "approved":
        return "#5cb85c";
      case "rejected":
        return "#d9534f";
      case "pending":
      default:
        return "#f0ad4e";
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Request Status</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {student && (
        <div style={styles.studentCard}>
          <h3>{student.name} ({student.rollno})</h3>
          <p>
            <strong>Branch:</strong> {student.branch.toUpperCase()} - {student.year}{student.section.toUpperCase()}
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${student.phoneno}`} style={styles.link}>
              {student.phoneno}
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${student.email}`} style={styles.link}>
              {student.email}
            </a>
          </p>
        </div>
      )}

      <div style={styles.requests}>
        {requests.map((req) => (
          <div key={req._id} style={styles.card}>
            <div style={styles.header}>
              <span style={styles.reqText}>📌 {req.request}</span>
              <span
                style={{
                  ...styles.badge,
                  backgroundColor: statusColor(req.inchargeApproval),
                }}
              >
                Incharge: {req.inchargeApproval.toUpperCase()}
              </span>
              <span
                style={{
                  ...styles.badge,
                  backgroundColor: statusColor(req.hodApproval),
                }}
              >
                HOD: {req.hodApproval.toUpperCase()}
              </span>
            </div>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(req.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Updated:</strong>{" "}
              {new Date(req.updatedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1976d2",
  },
  studentCard: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "20px",
    background: "#fdfdfd",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  requests: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "10px",
  },
  reqText: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  badge: {
    alignSelf: "flex-start",
    padding: "4px 10px",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "12px",
    display: "inline-block",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default RequestStatus;
