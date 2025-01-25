import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404 Not Found</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        The page you are looking for does not exist. Please go back to the{" "}
        <a href="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
          homepage
        </a>
        .
      </p>
    </div>
  );
};

export default NotFound;
