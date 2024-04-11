// NPM Packages
import { useState } from 'react';

// Project Imports
import './App.css';
import { getDate } from './utils';
import Form from './components/Form';

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

  const itemsList = items.map((item) => {
    const { name, amount, category } = item;
    const itemKey = `${new Date().getMilliseconds()}-${Math.random()}`;

    return (
      <li key={itemKey} className="list__item">
        <div>
          <h4>{name}</h4>
          <small>{getDate()}</small>
        </div>
        <div>
          {category === 'income' ? '+' : '-'}${amount}
        </div>
      </li>
    );
  });

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

        {itemsList && <ul className="list">{itemsList}</ul>}
      </main>

      <footer className="footer">
        This website was built for educational purpose only &#124; &copy; 2024
        Dakouri Kobri
      </footer>
    </div>
  );
}

export default App;
