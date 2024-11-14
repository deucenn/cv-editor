"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function WorkForm({ workItem, onDelete, isDeleteDisabled, onDataChange }) {
  const [jobResponsibilities, setJobResponsibilities] = useState(
    workItem.jobResponsibilities
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(workItem.id, { ...workItem, [name]: value });
  };

  const handleAddResponsibility = () => {
    const newResponsibility = { id: Date.now(), text: "" }; // Initialize text as an empty string
    const updatedResponsibilities = [...jobResponsibilities, newResponsibility];
    setJobResponsibilities(updatedResponsibilities);
    onDataChange(workItem.id, {
      ...workItem,
      jobResponsibilities: updatedResponsibilities,
    });
  };

  const handleDeleteResponsibility = (id) => {
    const updatedResponsibilities = jobResponsibilities.filter(
      (resp) => resp.id !== id
    );
    setJobResponsibilities(updatedResponsibilities);
    onDataChange(workItem.id, {
      ...workItem,
      jobResponsibilities: updatedResponsibilities,
    });
  };

  const handleResponsibilityChange = (index, e) => {
    const updatedResponsibilities = jobResponsibilities.map(
      (responsibility, i) =>
        i === index
          ? { ...responsibility, text: e.target.value }
          : responsibility
    );
    setJobResponsibilities(updatedResponsibilities);
    onDataChange(workItem.id, {
      ...workItem,
      jobResponsibilities: updatedResponsibilities,
    });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="companyName">Company Name</Label>
      <Input
        type="text"
        id="companyName"
        name="companyName"
        value={workItem.companyName}
        onChange={handleChange}
        placeholder="Google"
        className="rounded mb-3"
      />
      <Label htmlFor="jobTitle">Job Title</Label>
      <Input
        type="text"
        id="jobTitle"
        name="jobTitle"
        value={workItem.jobTitle}
        onChange={handleChange}
        placeholder="Software Engineer"
        className="rounded mb-3"
      />
      <Label htmlFor="startDate">Start Date</Label>
      <Input
        type="text"
        id="startDate"
        name="startDate"
        value={workItem.startDate}
        onChange={handleChange}
        placeholder="May 2022"
        className="rounded mb-3"
      />
      <Label htmlFor="endDate">End Date</Label>
      <Input
        type="text"
        id="endDate"
        name="endDate"
        value={workItem.endDate}
        onChange={handleChange}
        placeholder="May 2024 / Present / Etc."
        className="rounded mb-3"
      />
      <Label htmlFor="jobResp">Job Responsibilities</Label>
      {jobResponsibilities.map((responsibility, index) => (
        <div key={responsibility.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            placeholder="Some cool stuff"
            value={responsibility.text || ""}
            onChange={(e) => handleResponsibilityChange(index, e)}
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

export default function WorkFormsContainer({ workData, onWorkDataChange }) {
  const handleAddForm = () => {
    const newWorkItem = {
      id: Date.now(),
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      jobResponsibilities: [{ id: Date.now(), text: "" }],
    };
    onWorkDataChange([...workData, newWorkItem]);
  };

  const handleDeleteForm = (id) => {
    onWorkDataChange(workData.filter((item) => item.id !== id));
  };

  const handleWorkDataChange = (id, newData) => {
    const updatedWorkData = workData.map((workItem) =>
      workItem.id === id ? { ...workItem, ...newData } : workItem
    );
    onWorkDataChange(updatedWorkData);
  };

  return (
    <div>
      {workData.map((workItem, index) => (
        <WorkForm
          key={workItem.id}
          workItem={workItem}
          onDelete={() => handleDeleteForm(workItem.id)}
          isDeleteDisabled={index === 0}
          onDataChange={handleWorkDataChange}
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
