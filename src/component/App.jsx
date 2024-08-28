import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList list={items} onDelete={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
