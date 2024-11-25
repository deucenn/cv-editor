import { Button } from "@/components/ui/button";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Preview({ profileData }) {
  const downloadPDF = () => {
    const previewWindow = document.getElementById("preview");

    html2canvas(previewWindow, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [210, 297],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("CV.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center  min-h-screen">
      <Button
        variant="secondary"
        className="h-10 w-30 px-3 py-2 rounded mb-5 mt-5"
        onClick={downloadPDF}
      >
        <DownloadIcon />
        Download as PDF
      </Button>
      <div
        id="preview"
        className="bg-white text-black font-serif w-[210mm] h-[297mm] border shadow-md p-6 md:w-[210mm] md:h-[297mm] max-w-full"
      >
        <h1 className="text-5xl flex flex-col items-center mt-5 mb-3">
          {profileData.profile.fullName}
        </h1>
        <h2 className="flex flex-col items-center mb-5">
          {profileData.profile.email} · {profileData.profile.phoneNumber} ·{" "}
          {profileData.profile.location} · {profileData.profile.link}
        </h2>
        <div>
          <h3 className="mb-2">Experience</h3>
          <div className="border"></div>
          {profileData.work.map((workItem, index) => (
            <div key={workItem.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col ml-4">
                  <span className="font-bold text-lg">
                    {workItem.companyName}
                  </span>
                  <span className="text-sm text-gray-600">
                    {workItem.jobTitle}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-sm text-gray-500">
                    {workItem.startDate || workItem.endDate ? `${workItem.startDate} - ${workItem.endDate}` : null}
                  </span>
                </div>
              </div>
              <ul className="ml-10 text-sm mb-3">
                {workItem.jobResponsibilities.map((resp, i) =>
                  resp.text?.trim() ? <li key={i}>· {resp.text}</li> : null
                )}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-2">Education</h3>
          <div className="border"></div>
          {profileData.education.map((educationItem, index) => (
            <div key={educationItem.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col ml-4">
                  <span className="font-bold text-lg">
                    {educationItem.schoolName}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {educationItem.degree}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {educationItem.major}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">
                    {educationItem.gpa}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">

                    {educationItem.startDateEducation || educationItem.endDateEducation ? `${educationItem.startDateEducation} - ${educationItem.endDateEducation}` : null}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-2">Skills</h3>
          <div className="border"></div>
          {profileData.skills.map((skillItem, index) => (
            <div key={skillItem.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col ml-4">
                  <span className="font-bold text-lg">
                    {skillItem.skillName}
                  </span>
                </div>
              </div>
              <ul className="ml-10 text-sm mb-3">
                {skillItem.skillDetails.map((detail, i) =>
                  detail.text?.trim() ? <li key={i}>· {detail.text}</li> : null
                )}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-2">Projects</h3>
          <div className="border"></div>
          {profileData.projects.map((projectItem, index) => (
            <div key={projectItem.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col ml-4">
                  <span className="font-bold text-lg">
                    {projectItem.projectName}
                  </span>
                  <span className="text-sm text-gray-600">
                    {projectItem.projectDesc}
                  </span>
                  <span className="text-sm text-gray-600">
                    {projectItem.projectLink}
                  </span>
                </div>
              </div>
              <ul className="ml-10 text-sm mb-3">
                {projectItem.projectTools.map((tool, i) =>
                  tool.text?.trim() ? <li key={i}>· {tool.text}</li> : null
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
