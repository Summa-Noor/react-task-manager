import PriorityBadge from "./PriorityBadge.jsx";
import { formatDate, todayKey } from "../utils/date.js";

export default function TaskCard({ task, onToggle, onDelete }) {
  const overdue = !task.completed && task.dueDate < todayKey();
  return (
    <li className={`card ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        className="check"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.title}" as ${task.completed ? "pending" : "completed"}`}
      />
      <div className="card-body">
        <div className="card-top">
          <h3>{task.title}</h3>
          <PriorityBadge priority={task.priority} />
        </div>
        {task.description && <p className="muted">{task.description}</p>}
        <div className="card-meta">
          <span className={overdue ? "overdue" : "muted"}>
            {overdue ? "Overdue · " : "Due "}{formatDate(task.dueDate)}
          </span>
          <span className={`status ${task.completed ? "ok" : ""}`}>{task.completed ? "Completed" : "Pending"}</span>
        </div>
      </div>
      <button className="icon-btn del" onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`}>🗑</button>
    </li>
  );
}
