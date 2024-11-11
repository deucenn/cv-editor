"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ProjectForm({ onDelete, isDeleteDisabled }) {
  const [toolsUsed, setToolsUsed] = useState([{ id: 1 }]);

  const handleAddTool = () => {
    setToolsUsed([...toolsUsed, { id: Date.now() }]);
  };

  const handleDeleteTool = (id) => {
    setToolsUsed(toolsUsed.filter((tool) => tool.id !== id));
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="projectName">Project Name</Label>
      <Input
        type="text"
        id="projectName"
        placeholder="CV Application"
        className="rounded mb-3"
      />
      <Label htmlFor="projectDesc">Project Description</Label>
      <Input
        type="text"
        id="projectDesc"
        placeholder="A CV Application"
        className="rounded mb-3"
      />
      <Label htmlFor="projectLink">Link to Project</Label>
      <Input
        type="url"
        id="projectLink"
        placeholder="http://cv-application.de"
        className="rounded mb-3"
      />
      <Label htmlFor="projectTools">Tools Used</Label>
      {toolsUsed.map((tool, index) => (
        <div key={tool.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            id="projectTools"
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

export default function ProjectsFormsContainer() {
  const [forms, setForms] = useState([{ id: 1 }]);

  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div>
      {forms.map((form, index) => (
        <ProjectForm
          key={form.id}
          onDelete={() => handleDeleteForm(form.id)}
          isDeleteDisabled={index === 0}
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
