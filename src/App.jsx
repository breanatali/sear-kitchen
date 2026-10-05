import { useState, useEffect } from "react";
import { recipes } from "./data/recipes";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetail } from "./components/RecipeDetail";
import { ShoppingList } from "./components/ShoppingList";
import "./App.css";

// App holds all the shared state: search text, favorites, shopping list,
// and which recipe is open in the detail view. That state is passed down
// to components as props, and saved to localStorage so it survives refresh.
function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("searFavorites")) || [];
  });
  const [shoppingList, setShoppingList] = useState(() => {
    return JSON.parse(localStorage.getItem("searShopping")) || [];
  });
  const [selectedId, setSelectedId] = useState(null);

  // Persist favorites and shopping list whenever they change
  useEffect(() => {
    localStorage.setItem("searFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("searShopping", JSON.stringify(shoppingList));
  }, [shoppingList]);

  function toggleFavorite(id) {
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((f) => f !== id)
        : [...favorites, id]
    );
  }

  // Add a recipe's ingredients, skipping ones already on the list
  function addIngredients(recipe) {
    const fresh = recipe.ingredients.filter(
      (ing) => !shoppingList.some((item) => item.text === ing)
    );
    setShoppingList([
      ...shoppingList,
      ...fresh.map((text) => ({ text, done: false })),
    ]);
  }

  function toggleItem(text) {
    setShoppingList(
      shoppingList.map((item) =>
        item.text === text ? { ...item, done: !item.done } : item
      )
    );
  }

  function removeItem(text) {
    setShoppingList(shoppingList.filter((item) => item.text !== text));
  }

  function clearChecked() {
    setShoppingList(shoppingList.filter((item) => !item.done));
  }

  const visible = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));
  const selected = recipes.find((r) => r.id === selectedId);

  return (
    <div className="app">
      <header className="hero">
        <h1>Sear</h1>
        <p>Find your next favorite meal</p>
        <input
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
        />
      </header>

      <section>
        <h2>Recipes</h2>
        <div className="card-row">
          {visible.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={() => toggleFavorite(recipe.id)}
              onSelect={() => setSelectedId(recipe.id)}
            />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="empty-note">No recipes match your search.</p>
        )}
      </section>

      <section>
        <h2>My Favorites ({favoriteRecipes.length})</h2>
        {favoriteRecipes.length === 0 ? (
          <p className="empty-note">
            No favorites yet. Tap 🤍 on a recipe to save it here.
          </p>
        ) : (
          <div className="card-row">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(recipe.id)}
                onSelect={() => setSelectedId(recipe.id)}
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2>Shopping List</h2>
        <ShoppingList
          items={shoppingList}
          onToggleItem={toggleItem}
          onRemoveItem={removeItem}
          onClearChecked={clearChecked}
        />
      </section>

      {selected && (
        <RecipeDetail
          recipe={selected}
          isFavorite={favorites.includes(selected.id)}
          onToggleFavorite={() => toggleFavorite(selected.id)}
          onAddIngredients={() => addIngredients(selected)}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;
