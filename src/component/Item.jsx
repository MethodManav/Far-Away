export default function Item({ item, onDeleteItem, onUpdate }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
