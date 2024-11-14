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
                <li key={i}>{resp.text}</li> // Access `text` field of each responsibility
              ))}
            </ul>
            {index < profileData.work.length - 1 && <hr />}{" "}
            {/* Adds a separator between work entries */}
          </div>
        ))}
      </div>
      {/* Education Info */}
      <div>
        <p>Education:</p>
        {profileData.education.map((educationItem, index) => (
          <div key={educationItem.id}>
            <p>School Name: {educationItem.schoolName}</p>
            <p>Major: {educationItem.major}</p>
            <p>Degree: {educationItem.degree}</p>
            <p>GPA: {educationItem.gpa}</p>
            <p>Start Date: {educationItem.startDate}</p>
            <p>End Date: {educationItem.endDate}</p>
            <p>Responsibilities:</p>
            {index < profileData.work.length - 1 && <hr />}{" "}
            {/* Adds a separator between work entries */}
          </div>
        ))}
      </div>
    </div>
  );
}
