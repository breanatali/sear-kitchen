import "./RecipeDetail.css";

// Full recipe view shown when a card is clicked.
// The overlay darkens the page; clicking it (or the ×) closes the detail.
// stopPropagation on the panel keeps clicks inside from closing it.
export function RecipeDetail({ recipe, isFavorite, onToggleFavorite, onAddIngredients, onClose }) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img className="detail-img" src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
        <p className="recipe-meta">
          ⏱ {recipe.time} · 🍽 Serves {recipe.servings}
        </p>
        <p className="recipe-desc">{recipe.description}</p>

        <div className="detail-actions">
          <button className="fav-toggle" onClick={onToggleFavorite}>
            {isFavorite ? "❤️ Saved to favorites" : "🤍 Save to favorites"}
          </button>
          <button className="add-all" onClick={onAddIngredients}>
            🛒 Add all to shopping list
          </button>
        </div>

        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Directions</h3>
        <ol className="direction-list">
          {recipe.directions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
