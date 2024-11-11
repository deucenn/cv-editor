"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function WorkForm({ onDelete, isDeleteDisabled }) {
  const [jobResponsibilities, setJobResponsibilities] = useState([{ id: 1 }]);

  const handleAddResponsibility = () => {
    setJobResponsibilities([...jobResponsibilities, { id: Date.now() }]);
  };

  const handleDeleteResponsibility = (id) => {
    setJobResponsibilities(
      jobResponsibilities.filter((responsibility) => responsibility.id !== id)
    );
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="companyName">Company Name</Label>
      <Input
        type="text"
        id="companyName"
        placeholder="Google"
        className="rounded mb-3"
      />
      <Label htmlFor="jobTitle">Job Title</Label>
      <Input
        type="text"
        id="jobTitle"
        placeholder="Software Engineer"
        className="rounded mb-3"
      />
      <Label htmlFor="startDate">Start Date</Label>
      <Input
        type="text"
        id="startDate"
        placeholder="May 2022"
        className="rounded mb-3"
      />
      <Label htmlFor="endDate">End Date</Label>
      <Input
        type="text"
        id="endDate"
        placeholder="May 2024 / Present / Etc."
        className="rounded mb-3"
      />
      <Label htmlFor="jobResp">Job Responsibilities</Label>
      {jobResponsibilities.map((responsibility, index) => (
        <div key={responsibility.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            placeholder="Some cool stuff"
            className="rounded flex-grow"
          />
          <Button
            variant="secondary"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={handleAddResponsibility}
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            variant="destructive"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={() => handleDeleteResponsibility(responsibility.id)}
            disabled={jobResponsibilities.length === 1}
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

export default function WorkFormsContainer() {
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
        <WorkForm
          key={form.id}
          onDelete={() => handleDeleteForm(form.id)}
          isDeleteDisabled={index === 0}
        />
      ))}
      <Button
        variant="secondary"
        className="h-10 w-20 px-3 py-2 rounded"
        onClick={handleAddForm}
      >
        Add
      </Button>
    </div>
  );
}

