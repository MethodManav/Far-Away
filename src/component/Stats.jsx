export default function Stats({ item }) {
  if (!item.length) {
    return (
      <p className="stats">
        <em>start adding some items to your package list 🚀</em>
      </p>
    );
  }
  const numItem = item.length;
  const packedItem = item.filter((items) => items.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 1000
          ? `You got Everything..!Ready to go ✈️`
          : `You Have ${numItem} items on Your List , and you already packed ${packedItem} (${percentage})`}
      </em>
    </footer>
  );
}
