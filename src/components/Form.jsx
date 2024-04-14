// NPM Packages
import { useState } from 'react';

export default function Form({ onAdd }) {
  const [input, setInput] = useState({
    name: '',
    amount: '',
    category: 'income',
  });

  function handleInputUpdate(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: input.name,
      amount: +input.amount,
      category: input.category,
    };
    onAdd(item);
    setInput({
      name: '',
      amount: '',
      category: 'income',
    });
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__control-container">
        <input
          className="form__input"
          type="text"
          placeholder="Item name..."
          name="name"
          value={input.name}
          onChange={handleInputUpdate}
        />
        <input
          className="form__input"
          type="number"
          placeholder="Amount..."
          name="amount"
          value={input.amount}
          onChange={handleInputUpdate}
        />
        <select
          className="form__select"
          name="category"
          value={input.category}
          onChange={handleInputUpdate}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button className="btn" type="submit">
        &#43;
      </button>
    </form>
  );
}
