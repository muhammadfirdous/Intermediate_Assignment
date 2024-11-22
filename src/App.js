import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Profile Cards</h1>
      {/* Example Usage of ProfileCard */}
      <ProfileCard
        name="John Doe"
        image="https://via.placeholder.com/100"
        description="Software Engineer with a passion for building web applications."
      />
      <ProfileCard
        name="Jane Smith"
        image="https://via.placeholder.com/100"
        description="Graphic Designer who loves creating stunning visuals."
      />
    </div>
  );
};

export default App;
