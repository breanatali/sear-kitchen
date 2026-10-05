import "./RecipeCard.css";

// One recipe card. Clicking the card opens the detail view;
// the heart button toggles the favorite without opening it
// (stopPropagation keeps the card's own click from firing).
export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onSelect }) {
  return (
    <div className="recipe-card" onClick={onSelect}>
      <button
        className="heart-btn"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        aria-label="Save to favorites"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <img className="recipe-img" src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p className="recipe-desc">{recipe.description}</p>
      <p className="recipe-meta">⏱ {recipe.time} · 🍽 {recipe.servings} servings</p>
    </div>
  );
}
