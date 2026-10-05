// Shopping list section. Each item can be checked off or removed.
// Keys use the ingredient text (unique in this list) instead of the
// array index, so removing an item can't scramble the checkboxes.
export function ShoppingList({ items, onToggleItem, onRemoveItem, onClearChecked }) {
  if (items.length === 0) {
    return <p className="empty-note">Your shopping list is empty. Open a recipe and add its ingredients.</p>;
  }

  return (
    <div>
      <ul className="shopping-list">
        {items.map((item) => (
          <li key={item.text} className={item.done ? "done" : ""}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggleItem(item.text)}
            />
            <span>{item.text}</span>
            <button className="remove-btn" onClick={() => onRemoveItem(item.text)} aria-label="Remove">
              ×
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={onClearChecked}>
        Clear checked items
      </button>
    </div>
  );
}
