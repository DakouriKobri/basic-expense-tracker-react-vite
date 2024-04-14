// NPM Packages
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Project Imports
import { getDate } from '../utils';

export default function Form({ onAdd }) {
  const [isInputInvalid, setIsInputInvalid] = useState(false);
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
    const { amount, category, name } = input;

    const invalidInput = !name || !amount;
    if (invalidInput) {
      return setIsInputInvalid(invalidInput);
    }

    const item = {
      id: uuidv4(),
      name,
      amount: +amount,
      category,
      dateAdded: getDate(),
    };
    onAdd(item);
    setInput({
      name: '',
      amount: '',
      category: 'income',
    });
    setIsInputInvalid(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__control-container">
        <input
          className={`form__input ${
            isInputInvalid && input.name === '' && 'border-danger'
          }`}
          type="text"
          placeholder="Item name..."
          name="name"
          value={input.name}
          onChange={handleInputUpdate}
        />
        <input
          className={`form__input ${
            isInputInvalid && input.amount === '' && 'border-danger'
          }`}
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
