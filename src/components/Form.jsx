// NPM Packages
import { useState } from 'react';

export default function Form({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('income');

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
    onAdd(item);
    setName('');
    setAmount('');
    setCategory('income');
  }
  return (
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
  );
}
