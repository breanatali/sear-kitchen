import './card.css';
export function Card({ title, description, featured }) {
  return (
    <div className={`card ${featured ? 'card-featured' : ''}`}>
      {featured && <span>⭐ Featured</span>}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
