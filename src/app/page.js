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
      }
    ],
    projects: [
      {
        projectName: "",
        projectDesc: "",
        projectLink: "",
        projectTools: [""]
      }
    ]
  });

  const handleProfileDataChange = (newProfileData) => {
    setProfileData((prev) => ({ ...prev, profile: newProfileData }));
  };

  const handleWorkDataChange = (updatedWorkData) => {
    setProfileData((prev) => ({ ...prev, work: updatedWorkData }));
  };

  const handleEducationDataChange = (updatedEducationData) => {
    setProfileData((prev) => ({ ...prev, education: updatedEducationData }));
  };

  const handleSkillsDataChange = (updatedSkillsData) => {
    setProfileData((prev) => ({...prev, skills: updatedSkillsData}))
  }

  const handleProjectsDataChange = (updatedProjectsData) => {
    setProfileData((prev) => ({...prev, projects: updatedProjectsData}))
  }

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
