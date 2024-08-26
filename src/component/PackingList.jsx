import Item from "./Item";

export default function PackingList({ list }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
