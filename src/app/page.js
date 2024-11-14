"use client";

import { useState } from "react";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Preview from "./components/Preview";

export default function Home() {
  const [profileData, setProfileData] = useState({
    profile: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      link: "",
    },
    work: [
      {
        id: 1,
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        jobResponsibilities: [""],
      },
    ],
    // Add other sections like education, skills, etc. in the future.
  });

  const handleProfileDataChange = (newProfileData) => {
    setProfileData((prev) => ({ ...prev, profile: newProfileData }));
  };

  const handleWorkDataChange = (updatedWorkData) => {
    setProfileData((prev) => ({ ...prev, work: updatedWorkData })); // Update `work` with new array
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <Input
          profileData={profileData}
          onProfileDataChange={handleProfileDataChange}
          onWorkDataChange={handleWorkDataChange}
        />
        <Preview profileData={profileData} />
      </div>
    </>
  );
}
