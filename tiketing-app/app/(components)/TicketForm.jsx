"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const handleChage = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const startingTicketData = {
    title: "",
    descriprion: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChage}
          required={true}
          value={formData.title}
        />
        <label> Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChage}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChage}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            name="priority"
            id="priority-1"
            type="radio"
            onChange={handleChage}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            name="priority"
            id="priority-2"
            type="radio"
            onChange={handleChage}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            name="priority"
            id="priority-3"
            type="radio"
            onChange={handleChage}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            name="priority"
            id="priority-4"
            type="radio"
            onChange={handleChage}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            name="priority"
            id="priority-5"
            type="radio"
            onChange={handleChage}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChage}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChage}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
