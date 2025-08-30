import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Card } from "antd";
import backgroundImage from "../assets/back.jpg";
import Footer from "../components/Footer";

const Lessons = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const grades = [
    { grade: 6, path: "/lessons/grade6" },
    { grade: 7, path: "/lessons/grade7" },
    { grade: 8, path: "/lessons/grade8" },
    { grade: 9, path: "/lessons/grade9" },
    { grade: 10, path: "/lessons/grade10" },
    { grade: 11, path: "/lessons/grade11" },
  ];

  const pageStyle = {
    position: "relative",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.55)",
    backdropFilter: "blur(6px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    padding: "80px 40px 60px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)",
    marginBottom: "10px",
  };

  const subTextStyle = {
    fontSize: "1.2rem",
    opacity: 0.9,
  };

  const cardContainerStyle = {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    zIndex: 2,
  };

  const baseCardStyle = {
    width: 260,
    minHeight: 190,
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(8px)",
    borderRadius: "15px",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in-out",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    textAlign: "center",
  };

  const hoverCardStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      <NavBar />
      <div style={pageStyle}>
        <div style={overlayStyle}></div>

        <div style={contentStyle}>
          <h1 style={headingStyle}>Science Lessons</h1>
          <p style={subTextStyle}>Select your grade to access the lessons.</p>

          <div style={cardContainerStyle}>
            {grades.map(({ grade, path }) => (
              <Card
                key={grade}
                title={`Grade ${grade}`}
                bordered={false}
                style={{
                  ...baseCardStyle,
                  ...(hovered === grade ? hoverCardStyle : {}),
                }}
                onClick={() => navigate(path)}
                hoverable
                onMouseEnter={() => setHovered(grade)}
                onMouseLeave={() => setHovered(null)}
                bodyStyle={{ fontSize: "15px", color: "#fff" }}
                aria-label={`View lessons for Grade ${grade}`}
              >
                Explore interactive lessons for Grade {grade}
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lessons;
