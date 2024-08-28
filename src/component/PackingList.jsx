import Item from "./Item";

export default function PackingList({ list, onDelete }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <Item item={item} onDeleteItem={onDelete} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
