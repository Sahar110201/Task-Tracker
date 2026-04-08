"use client";
import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}