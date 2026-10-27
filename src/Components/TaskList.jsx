import TaskCard from "./TaskCard.jsx";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty">
        <p>No tasks match these filters.</p>
        <p className="muted">Add a task or clear a filter to see more.</p>
      </div>
    );
  }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
