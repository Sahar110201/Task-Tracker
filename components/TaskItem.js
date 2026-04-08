export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}