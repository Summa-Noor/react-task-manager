import { useState } from "react";
import { todayKey } from "../utils/date.js";

const empty = { title: "", description: "", priority: "Medium", dueDate: todayKey() };

export default function TaskForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.title.trim()) er.title = "Give your task a title.";
    if (!form.description.trim()) er.description = "Add a short description.";
    if (!form.dueDate) er.dueDate = "Pick a due date.";
    return er;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) {
      onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Prepare demo" autoFocus />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>
        Description
        <textarea name="description" rows="3" value={form.description} onChange={handleChange} placeholder="What needs to happen?" />
        {errors.description && <span className="error">{errors.description}</span>}
      </label>

      <div className="row">
        <label>
          Priority
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <label>
          Due date
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
          {errors.dueDate && <span className="error">{errors.dueDate}</span>}
        </label>
      </div>

      <div className="actions">
        <button type="button" className="btn ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn primary">Add task</button>
      </div>
    </form>
  );
}
