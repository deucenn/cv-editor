import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProfileForm from "./ProfileForm";
import WorkFormsContainer from "./WorkForm";
import EducationFormsContainer from "./EducationForm";
import SkillsFormsContainer from "./SkillsForm";
import ProjectsFormsContainer from "./ProjectsForm";

export default function Input({
  profileData,
  onProfileDataChange,
  onWorkDataChange, onEducationDataChange, onSkillsDataChange, onProjectsDataChange
}) {
  return (
    <>
      <div className="font-geist w-1/2 mt-10 ml-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Profile</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <ProfileForm
                  profileData={profileData}
                  onDataChange={onProfileDataChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Work</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <WorkFormsContainer
                  workData={profileData.work}
                  onWorkDataChange={onWorkDataChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <EducationFormsContainer 
                  educationData={profileData.education}
                  onEducationDataChange={onEducationDataChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Skills</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <SkillsFormsContainer 
                  skillsData={profileData.skills}
                  onSkillsDataChange={onSkillsDataChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Projects</AccordionTrigger>
            <AccordionContent>
              <div className="ml-5">
                <ProjectsFormsContainer 
                  projectsData={profileData.projects}
                  onProjectsDataChange={onProjectsDataChange}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
