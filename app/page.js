import { Container, Card, InputGroup, Button } from "./styles";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { fetchQuote } from "../utils/api";

// state management
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
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
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleFetchQuote = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchQuote();

    if (result) {
      setQuote(result);
    } else {
      setError("Could not load quote");
    }

    setLoading(false);
  };

  return (
    <Container>
      <Card>
        <h1>My Tasks</h1>

        <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "-8px" }}>
          State management + API integration project
        </p>

        <p style={{ color: '#64748b', marginBottom: '1rem' }}>
          {tasks.filter(t => t.completed).length} / {tasks.length} completed
        </p>

        <TaskInput onAdd={addTask} />

        <div className="quote-box">
          <button onClick={handleFetchQuote} disabled={loading}>
            {loading ? "Loading..." : "Get Motivation"}
          </button>

          {error && <p>{error}</p>}

          {quote && (
            <p>
              "{quote.text}" — {quote.author || "Unknown"}
            </p>
          )}
        </div>

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

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </Card>
    </Container>
  );
}
