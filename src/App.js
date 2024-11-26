import React from 'react';
import NavBar from './components/NavBar';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import FormValidation from './components/FormValidation';
import PortfolioCard from './components/PortfolioCard';
import Footer from './components/Footer';

function App() {

  const [activeTab, setActiveTab] = React.useState("ProfileCard");

  const renderSection = () => {
    switch (activeTab) {
      case "ProfileCard":
        return (
          <ProfileCard
            name="Bojack Horseman"
            image="/Profile.jpg"
            description="Bojack Horseman is a washed-up Hollywood actor struggling with his past fame, self-destructive habits, and search for purpose. Despite his flaws, he often shows glimpses of vulnerability, wit, and a desire to do better."
          />
        );
      case "BlogCard":
        return (
          <div style={{ display: "flex", gap: "20px" }}>
            <BlogCard
              title="MR Peanut Butter"
              description="Peanut is a super hero character of Marvel Studios. Rich and genius person who likes coding."
              image="/peanut.webp"
            />
            <BlogCard
              title="Why is he famous?"
              description="He is famous because of MR Bojack."
              image="/peanut.webp"
            />
          </div>
        );
      case "FormValidation":
        return <FormValidation />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar setActiveTab={setActiveTab} />
      <main style={{ padding: "20px", flex: 1 }}>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
