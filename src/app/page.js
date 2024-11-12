"use client"

import { useState } from "react";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Preview from "./components/Preview";

export default function Home() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    link: "",
  });

  const handleProfileDataChange = (newProfileData) => {
    setProfileData(newProfileData);
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <Input profileData={profileData} onDataChange={handleProfileDataChange} />
        <Preview profileData={profileData}/>
      </div>
    </>
  );
}
