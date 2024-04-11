// NPM Packages
import { useState } from 'react';

// Project Imports
import './App.css';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  const balance = items.reduce(
    (sum, item) =>
      item.category === 'expense' ? sum - item.amount : sum + item.amount,
    0
  );

  return (
    <div className="container">
      <header className="header">
        <h1>My Money</h1>
      </header>

      <main className="main">
        <div className="balance">
          {balance > 0 && '+'}
          {balance}
        </div>

        <Form onAdd={handleAddItem} />
        <ItemsList items={items} />
      </main>

      <footer className="footer">
        This website was built for educational purpose only &#124; &copy; 2024
        Dakouri Kobri
      </footer>
    </div>
  );
}

export default App;
