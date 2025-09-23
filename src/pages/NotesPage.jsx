import React from 'react';
import StdHeader from '../components/StdHeader';

const notes = [
  { title: "CVR", file: "/assets/CVR.pdf" },
  { title: "WT", file: "/assets/WT.pdf" },
  // Add more notes here
];

const NotesPage = () => {
  return (
    <>
        <StdHeader />
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Course Notes</h1>
      <div style={styles.grid}>
        {notes.map((note, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.title}>{note.title}</h2>
            <a href={note.file} target="_blank" rel="noopener noreferrer">
              <button style={styles.button}>View Notes</button>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "36px",
    color: "#1976d2",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  card: {
    background: "#fff",
    padding: "30px 20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

// Add hover effect dynamically
const addHoverEffect = () => {
  const cards = document.querySelectorAll("div[style*='cursor: pointer']");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
    });
  });
};

setTimeout(addHoverEffect, 100); // delay to ensure elements are rendered

export default NotesPage;
