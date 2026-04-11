import { ListItem, TaskText, Button } from "./styles";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <ListItem completed={task.completed}>
      <TaskText 
        completed={task.completed} 
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </TaskText>
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </ListItem>
  );
}