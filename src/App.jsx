// NPM Packages
import { useState } from 'react';

// Project Imports
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('income');
  const [items, setItems] = useState([]);

  console.log('items:', items);

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

    const item = { name, amount, category };
    setItems((currentItems) => [...currentItems, item]);
    setName('');
    setAmount('');
    setCategory('income');
  }

  return (
    <div className="container">
      <header className="header">
        <h1>My Money</h1>
      </header>

      <main className="main">
        <div className="balance">-5150</div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Income or expense..."
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

        <ul className="list">
          <li className="list__item">
            <div>
              <h4>Salary</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>+$5000.00</div>
          </li>

          <li className="list__item">
            <div>
              <h4>Dinner</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>-$150.00</div>
          </li>

          <li className="list__item">
            <div>
              <h4>Car</h4>
              <small>Thu, Apr 11, 2024</small>
            </div>
            <div>-$10000.00</div>
          </li>
        </ul>
      </main>

      <footer className="footer">
        This website was built for educational purpose only &#124; &copy; 2024
        Dakouri Kobri
      </footer>
    </div>
  );
}

export default App;
