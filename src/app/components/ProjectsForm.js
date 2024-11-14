"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ProjectForm({
  projectItem,
  onDelete,
  isDeleteDisabled,
  onDataChange,
}) {
  const [toolsUsed, setToolsUsed] = useState(projectItem.projectTools);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(projectItem.id, { ...projectItem, [name]: value });
  };

  const handleAddTool = () => {
    const newTool = { id: Date.now(), text: "" };
    const updatedTools = [...toolsUsed, newTool];
    setToolsUsed(updatedTools);
    onDataChange(projectItem.id, {
      ...projectItem,
      projectTools: updatedTools,
    });
  };

  const handleDeleteTool = (id) => {
    const updatedTools = toolsUsed.filter((tool) => tool.id !== id);
    setToolsUsed(updatedTools);
    onDataChange(projectItem.id, {
      ...projectItem,
      projectTools: updatedTools,
    });
  };

  const handleUsedToolsChange = (index, e) => {
    const updatedTools = toolsUsed.map((tool, i) =>
      i === index ? { ...tool, text: e.target.value } : tool
    );
    setToolsUsed(updatedTools);
    onDataChange(projectItem.id, {
      ...projectItem,
      projectTools: updatedTools,
    });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="projectName">Project Name</Label>
      <Input
        type="text"
        id="projectName"
        name="projectName"
        value={projectItem.projectName}
        placeholder="CV Application"
        className="rounded mb-3"
        onChange={handleChange}
      />
      <Label htmlFor="projectDesc">Project Description</Label>
      <Input
        type="text"
        id="projectDesc"
        name="projectDesc"
        value={projectItem.projectDesc}
        placeholder="A CV Application"
        className="rounded mb-3"
        onChange={handleChange}
      />
      <Label htmlFor="projectLink">Link to Project</Label>
      <Input
        type="url"
        id="projectLink"
        name="projectLink"
        value={projectItem.projectLink}
        placeholder="http://cv-application.de"
        className="rounded mb-3"
        onChange={handleChange}
      />
      <Label htmlFor="projectTools">Tools Used</Label>
      {toolsUsed.map((tool, index) => (
        <div key={tool.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            id="projectTools"
            value={tool.text || ""}
            onChange={(e) => handleUsedToolsChange(index, e)}
            placeholder="JavaScript"
            className="rounded flex-grow"
          />
          <Button
            variant="secondary"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={handleAddTool}
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            variant="destructive"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={() => handleDeleteTool(tool.id)}
            disabled={toolsUsed.length === 1}
          >
            <HighlightOffIcon />
          </Button>
        </div>
      ))}
      <Button
        variant="destructive"
        className="h-10 w-20 px-3 py-2 rounded"
        onClick={onDelete}
        disabled={isDeleteDisabled}
      >
        Delete
      </Button>
    </div>
  );
}

export default function ProjectsFormsContainer({
  projectsData,
  onProjectsDataChange,
}) {
  const handleAddForm = () => {
    const newProjectItem = {
      id: Date.now(),
      projectName: "",
      projectDesc: "",
      projectLink: "",
      projectTools: [{ id: Date.now(), text: "" }],
    };
    onProjectsDataChange([...projectsData, newProjectItem]);
  };

  const handleDeleteForm = (id) => {
    onProjectsDataChange(projectsData.filter((item) => item.id !== id));
  };

  const handleProjectsDataChange = (id, newData) => {
    const updatedProjectsData = projectsData.map((item) =>
      item.id === id ? { ...item, ...newData } : item
    );
    onProjectsDataChange(updatedProjectsData);
  };

  return (
    <div>
      {projectsData.map((projectItem, index) => (
        <ProjectForm
          key={projectItem.id}
          projectItem={projectItem}
          onDelete={() => handleDeleteForm(projectItem.id)}
          isDeleteDisabled={index === 0}
          onDataChange={handleProjectsDataChange}
        />
      ))}
      <div className="flex items-center gap-2 mt-4">
        <Button
          variant="secondary"
          className="h-10 w-20 px-3 py-2 rounded"
          onClick={handleAddForm}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
