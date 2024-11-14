import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Preview({ profileData }) {
  return (
    <div className="w-full h-full">
      {/* Profile Info */}
      <p>Full Name: {profileData.profile.fullName}</p>
      <p>Email: {profileData.profile.email}</p>
      <p>Phone Number: {profileData.profile.phoneNumber}</p>
      <p>Location: {profileData.profile.location}</p>
      <p>Link: {profileData.profile.link}</p>

      {/* Work Info */}
      <div>
      <p>-----</p>
        <p>Job:</p>
        {profileData.work.map((workItem, index) => (
          <div key={workItem.id}>
            <p>Company Name: {workItem.companyName}</p>
            <p>Job Title: {workItem.jobTitle}</p>
            <p>Start Date: {workItem.startDate}</p>
            <p>End Date: {workItem.endDate}</p>
            <p>Responsibilities:</p>
            <ul>
              {workItem.jobResponsibilities.map((resp, i) => (
                <li key={i}>{resp.text}</li> 
              ))}
            </ul>
            {index < profileData.work.length - 1 && <hr />}{" "}
            {/* Adds a separator between entries */}
          </div>
        ))}
      </div>
      {/* Education Info */}
      <div>
      <p>-----</p>
        <p>Education:</p>
        {profileData.education.map((educationItem, index) => (
          <div key={educationItem.id}>
            <p>School Name: {educationItem.schoolName}</p>
            <p>Degree: {educationItem.degree}</p>
            <p>Major: {educationItem.major}</p>
            <p>GPA: {educationItem.gpa}</p>
            <p>Start Date: {educationItem.startDateEducation}</p>
            <p>End Date: {educationItem.endDateEducation}</p>
            {index < profileData.education.length - 1 && <hr />}{" "}
            {/* Adds a separator between entries */}
          </div>
        ))}
      </div>
      {/* Skills Info */}
      <div>
      <p>-----</p>
        <p>Skills:</p>
        {profileData.skills.map((skillItem, index) => (
          <div key={skillItem.id}>
            <p>Skill: {skillItem.skillName}</p>
            <p>Details:</p>
            <ul>
              {skillItem.skillDetails.map((tool, i) => (
                <li key={i}>{tool.text}</li> 
              ))}
            </ul>
            {index < profileData.skills.length - 1 && <hr />}{" "}
            {/* Adds a separator between entries */}
          </div>
        ))}
      </div>
      {/* Projects Info */}
      <div>
        <p>-----</p>
        <p>Projects:</p>
        {profileData.projects.map((projectItem, index) => (
          <div key={projectItem.id}>
            <p>Project: {projectItem.projectName}</p>
            <p>Description: {projectItem.projectDesc}</p>
            <p>Link: {projectItem.link}</p>
            <p>Tools:</p>
            <ul>
              {projectItem.projectTools.map((project, i) => (
                <li key={i}>{project.text}</li> 
              ))}
            </ul>
            {index < profileData.projects.length - 1 && <hr />}{" "}
            {/* Adds a separator between entries */}
          </div>
        ))}
      </div>
    </div>
  );
}
