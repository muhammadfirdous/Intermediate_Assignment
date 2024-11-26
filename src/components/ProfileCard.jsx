import React from 'react';
import './style/ProfileCard.module.css';

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <img 
        src="/Profile.jpg" 
        alt="Profile" 
        className="rounded-full w-32 h-32 mb-4 profile-image"
      />
      <h2 className="text-2xl font-bold mb-2">Bojack Horsman</h2>
      <p className="text-center text-gray-600 max-w-2xl px-4">
      Bojack Horseman is a washed-up Hollywood actor struggling with his past fame, self-destructive habits, and search for purpose. Despite his flaws, he often shows glimpses of vulnerability, wit, and a desire to do better.
      </p>
    </div>
  );
};

export default ProfileCard;