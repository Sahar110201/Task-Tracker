"use client";
import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ MOVE HERE

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // ✅ FILTER LOGIC HERE
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="home">
      <h1>My Tasks</h1>

      <p>
        {tasks.filter(t => t.completed).length} / {tasks.length} completed
      </p>

      <TaskInput onAdd={addTask} />

      {/* ✅ FILTER BUTTONS */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* ✅ USE filteredTasks HERE */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}