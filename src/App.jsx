// NPM Packages
import { useState } from 'react';

// Project Imports
import './App.css';
import Balance from './components/Balance';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
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
      <Header />

      <main className="main">
        <Balance balance={balance} />
        <Form onAdd={handleAddItem} />
        <ItemsList items={items} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
