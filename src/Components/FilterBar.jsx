const statuses = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

export default function FilterBar({ status, onStatus, priority, onPriority, sortBy, onSort, selectedDate, onClearDate }) {
  return (
    <div className="filters">
      <div className="chips" role="tablist">
        {statuses.map((s) => (
          <button
            key={s.value}
            role="tab"
            aria-selected={status === s.value}
            className={`chip ${status === s.value ? "active" : ""}`}
            onClick={() => onStatus(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="selects">
        <select value={priority} onChange={(e) => onPriority(e.target.value)} aria-label="Filter by priority">
          <option value="all">Any priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select value={sortBy} onChange={(e) => onSort(e.target.value)} aria-label="Sort tasks">
          <option value="due">Sort: due date</option>
          <option value="priority">Sort: priority</option>
        </select>
      </div>

      {selectedDate && (
        <button className="chip active" onClick={onClearDate}>Date: {selectedDate} ✕</button>
      )}
    </div>
  );
}
