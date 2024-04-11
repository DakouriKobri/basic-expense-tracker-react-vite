// NPM Packages
import { useState } from 'react';

// Project Imports
import './App.css';
import { getDate } from './utils';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('income');
  const [items, setItems] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, amount: +amount, category };
    setItems((currentItems) => [...currentItems, item]);
    setName('');
    setAmount('');
    setCategory('income');
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

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item name..."
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="number"
            placeholder="Amount..."
            value={amount}
            onChange={handleAmountChange}
          />
          <select value={category} onChange={handleCategoryChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button type="submit">&#43;</button>
        </form>

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
