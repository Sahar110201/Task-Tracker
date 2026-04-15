// ... existing imports ...
import { Container, Card, InputGroup, Button } from "./styles";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");


useEffect(() => {
  const saved = localStorage.getItem("tasks");
  if (saved) setTasks(JSON.parse(saved));
}, []);

 
useEffect(() => {
 localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

 
const addTask = (text) => {
  setTasks([...tasks, { 
    id: Date.now(), text, completed: false }
    ]);
};

const toggleTask = (id) => {
  setTasks( tasks.map(task => task.id === id ? { 
    ...task, completed: !task.completed } : task
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
}