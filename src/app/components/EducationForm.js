"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function EducationForm({ onDelete, isDeleteDisabled, educationItem, onDataChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(educationItem.id, { educationItem, [name]: value });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="schoolName">School Name</Label>
      <Input
        type="text"
        id="schoolName"
        name="schoolName"
        value={educationItem.schoolName}
        onChange={handleChange}
        placeholder="Stanford University"
        className="rounded mb-3"
      />
      <Label htmlFor="degree">Degree</Label>
      <Input
        type="text"
        id="degree"
        name="degree"
        value={educationItem.degree}
        onChange={handleChange}
        placeholder="B. Sc."
        className="rounded mb-3"
      />
      <Label htmlFor="major">Major</Label>
      <Input
        type="text"
        id="major"
        name="major"
        value={educationItem.major}
        onChange={handleChange}
        placeholder="Computer Science"
        className="rounded mb-3"
      />
      <Label htmlFor="gpa">GPA</Label>
      <Input
        type="text"
        id="gpa"
        name="gpa"
        value={educationItem.gpa}
        onChange={handleChange}
        placeholder="1.7"
        className="rounded mb-3"
      />
      <Label htmlFor="startDateEducation">Start Date</Label>
      <Input
        type="text"
        id="startDateEducation"
        name="startDateEducation"
        value={educationItem.startDateEducation}
        onChange={handleChange}
        placeholder="Sep 2018"
        className="rounded mb-3"
      />
      <Label htmlFor="endDateEducation">End Date</Label>
      <Input
        type="text"
        id="endDateEducation"
        name="endDateEducation"
        value={educationItem.endDateEducation}
        onChange={handleChange}
        placeholder="Sep 2021"
        className="rounded mb-3"
      />
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

export default function EducationFormsContainer({
  educationData,
  onEducationDataChange,
}) {
  const [forms, setForms] = useState([{ id: 1 }]);

  const handleAddForm = () => {
    const newEducationItem = {
      id: Date.now(),
      schoolName: "",
      degree: "",
      major: "",
      gpa: "",
      startDate: "",
      endDate: "",
    }
    setForms([...forms, newEducationItem]);
    onEducationDataChange([...educationData, newEducationItem])
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
    onEducationDataChange(educationData.filter((item) => item.id !== id));
  };
  

  const handleEducationDataChange = (id, newData) => {
    const updatedEducationData = educationData.map((educationItem) =>
      educationItem.id === id ? { ...educationItem, ...newData } : educationItem
    );
    onEducationDataChange(updatedEducationData)
  };

  return (
    <div>
      {educationData.map((educationItem, index) => (
        <EducationForm
          key={educationItem.id}
          educationItem={educationItem}
          onDelete={() => handleDeleteForm(educationItem.id)}
          isDeleteDisabled={index === 0}
          onDataChange={handleEducationDataChange}
        />
      ))}
      <Button
        variant="secondary"
        className="h-10 w-20 px-3 py-2 rounded mt-4"
        onClick={handleAddForm}
      >
        Add
      </Button>
    </div>
  );
}
