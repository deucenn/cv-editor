"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function EducationForm({ onDelete, isDeleteDisabled }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="schoolName">School Name</Label>
      <Input
        type="text"
        id="schoolName"
        placeholder="Stanford University"
        className="rounded mb-3"
      />
      <Label htmlFor="degree">Degree</Label>
      <Input
        type="text"
        id="degree"
        placeholder="B. Sc."
        className="rounded mb-3"
      />
      <Label htmlFor="major">Major</Label>
      <Input
        type="text"
        id="major"
        placeholder="Computer Science"
        className="rounded mb-3"
      />
      <Label htmlFor="gpa">GPA</Label>
      <Input type="text" id="gpa" placeholder="1.7" className="rounded mb-3" />
      <Label htmlFor="startDateEducation">Start Date</Label>
      <Input
        type="text"
        id="startDateEducation"
        placeholder="Sep 2018"
        className="rounded mb-3"
      />
      <Label htmlFor="endDateEducation">End Date</Label>
      <Input
        type="text"
        id="endDateEducation"
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

export default function EducationFormsContainer() {
  const [forms, setForms] = useState([{ id: 1 }]);

  // Function to add a new form
  const handleAddForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  // Function to delete a form by ID
  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div>
      {forms.map((form, index) => (
        <EducationForm
          key={form.id}
          onDelete={() => handleDeleteForm(form.id)}
          isDeleteDisabled={index === 0}
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
