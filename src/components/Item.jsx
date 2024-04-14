// Project Imports
import { formatCurrency } from '../utils';

export default function Item({ item }) {
  const { name, amount, category, dateAdded } = item;
  const formatCurrencyOptions = {
    style: 'currency',
    currency: 'USD',
  };

  const isIncome = category === 'income';

  return (
    <li className="list__item">
      <div>
        <h4 className="list__item-name">{name}</h4>
        <small className="list__item-date">{dateAdded}</small>
      </div>
      <div className={`list__item-amount ${isIncome ? 'success' : 'danger'}`}>
        {isIncome ? '+' : '-'}
        {formatCurrency(amount, formatCurrencyOptions)}
      </div>
    </li>
  );
}
