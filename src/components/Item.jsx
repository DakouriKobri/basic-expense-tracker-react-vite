// Project Imports
import { formatCurrency, getDate } from '../utils';

export default function Item({ item }) {
  const { name, amount, category } = item;
  const formatCurrencyOptions = {
    style: 'currency',
    currency: 'USD',
  };

  return (
    <li className="list__item">
      <div>
        <h4>{name}</h4>
        <small>{getDate()}</small>
      </div>
      <div>
        {category === 'income' ? '+' : '-'}
        {formatCurrency(amount, formatCurrencyOptions)}
      </div>
    </li>
  );
}
