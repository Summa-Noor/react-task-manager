export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      className={`toggle ${isDark ? "on" : ""}`}
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
    >
      <span className="toggle-icon">{isDark ? "🌙" : "☀️"}</span>
      <span className="toggle-knob" />
    </button>
  );
}
