<<<<<<< HEAD
// ... existing imports ...
import { Container, Card, InputGroup, Button } from "./styles";

export default function Home() {
  // ... existing logic ...

  return (
    <Container>
      <Card>
        <h1>My Tasks</h1>
        <p style={{ color: '#64748b', marginBottom: '1rem' }}>
          {tasks.filter(t => t.completed).length} / {tasks.length} completed
        </p>

        <TaskInput onAdd={addTask} />

        <InputGroup>
          {["all", "active", "completed"].map((f) => (
            <Button 
              key={f}
              active={filter === f} 
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </InputGroup>

        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </Card>
    </Container>
  );
=======
"use client";
import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { fetchQuote } from "../utils/api"; // API utility function for fetching motivational quotes

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ MOVE HERE
  
  //State for storing API quote data and handling loading/error states
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // Function to fetch a motivational quote from API and update UI state
  const handleFetchQuote = async () => {
    setLoading(true);

    const result = await fetchQuote();

    if (result) {
      setQuote(result);
      setError(null);
    } else {
      setError("Could not load quote");
    }

    setLoading(false);
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

      {/* Motivation quote section placeholder */}
      <div className="quote-box">
      <button onClick={handleFetchQuote}>Get Motivation</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {quote && (
        <p>
          {"{quote.text}"} — {quote.author}
        </p>
      )}
      </div>

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
>>>>>>> 0e44e6d (Added API integration and placeholders)
}