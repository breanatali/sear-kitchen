import './section.css';
export function Section({ title, children }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}