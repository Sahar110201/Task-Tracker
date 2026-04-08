import TaskItem from "./TaskItem";

<div className="filters">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>
</div>

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p className="empty">No tasks yet. Add one above!</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}