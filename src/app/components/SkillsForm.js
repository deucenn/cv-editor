"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SkillsForm({ onDelete, isDeleteDisabled }) {
  const [skillDetails, setSkillDetails] = useState([{ id: 1 }]);

  const handleAddDetail = () => {
    setSkillDetails([...skillDetails, { id: Date.now() }]);
  };

  const handleDeleteDetail = (id) => {
    setSkillDetails(skillDetails.filter((detail) => detail.id !== id));
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="skillName">Skill Name</Label>
      <Input
        type="text"
        id="skillName"
        placeholder="Programming Languages"
        className="rounded mb-3"
      />
      <Label htmlFor="skillDetails">Skill Details</Label>
      {skillDetails.map((detail, index) => (
        <div key={detail.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            placeholder="JavaScript"
            className="rounded flex-grow"
          />
          <Button
            variant="secondary"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={handleAddDetail}
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            variant="destructive"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={() => handleDeleteDetail(detail.id)}
            disabled={skillDetails.length === 1}
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

export default function SkillFormsContainer() {
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
        <SkillsForm
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


