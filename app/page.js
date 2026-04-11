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
}