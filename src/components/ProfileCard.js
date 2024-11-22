import React from "react";

const ProfileCard = ({ name, image, description }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={`${name}'s profile`} style={imageStyle} />
      <h3 style={nameStyle}>{name}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

// Inline styles for the component
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  margin: "16px auto",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginBottom: "16px",
};

const nameStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "8px 0",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#555",
};

export default ProfileCard;
