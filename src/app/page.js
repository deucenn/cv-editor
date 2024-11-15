"use client";

import { useState } from "react";
import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Preview from "./components/Preview";

export default function Home() {
  const [profileData, setProfileData] = useState({
    profile: {
      fullName: "John Smith",
      email: "johnsmith@example.com",
      phoneNumber: "(555) 123-4567",
      location: "New York, NY",
      link: "mycoolportfolio.com",
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
    education: [
      {
        id: 1,
        schoolName: "",
        degree: "",
        major: "",
        gpa: "",
        startDateEducation: "",
        endDateEducation: "",
      },
    ],
    skills: [
      {
        id: 1,
        skillName: "",
        skillDetails: [""],
      },
    ],
    projects: [
      {
        id: 1,
        projectName: "",
        projectDesc: "",
        projectLink: "",
        projectTools: [""],
      },
    ],
  });

  // Profile Data Change Handler
  const handleProfileDataChange = (newProfileData) => {
    setProfileData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...newProfileData,
      },
    }));
  };

  // Work Data Change Handler
  const handleWorkDataChange = (updatedWorkData) => {
    setProfileData((prev) => ({
      ...prev,
      work: updatedWorkData,
    }));
  };

  // Education Data Change Handler
  const handleEducationDataChange = (updatedEducationData) => {
    setProfileData((prev) => ({
      ...prev,
      education: updatedEducationData,
    }));
  };

  // Skills Data Change Handler
  const handleSkillsDataChange = (updatedSkillsData) => {
    setProfileData((prev) => ({
      ...prev,
      skills: updatedSkillsData,
    }));
  };

  // Projects Data Change Handler
  const handleProjectsDataChange = (updatedProjectsData) => {
    setProfileData((prev) => ({
      ...prev,
      projects: updatedProjectsData,
    }));
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <Input
          profileData={profileData}
          onProfileDataChange={handleProfileDataChange}
          onWorkDataChange={handleWorkDataChange}
          onEducationDataChange={handleEducationDataChange}
          onSkillsDataChange={handleSkillsDataChange}
          onProjectsDataChange={handleProjectsDataChange}
        />
        <Preview profileData={profileData} />
      </div>
    </>
  );
}

