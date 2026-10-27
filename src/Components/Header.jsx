import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ theme, onToggleTheme, stats, onAdd }) {
  const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  return (
    <header className="header">
      <div className="brand">
        <h1>Taskly</h1>
        <p className="muted">{stats.done} of {stats.total} done</p>
        <div className="progress" aria-hidden="true"><span style={{ width: `${pct}%` }} /></div>
      </div>
      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button className="btn primary" onClick={onAdd}>+ Add task</button>
      </div>
    </header>
  );
}
