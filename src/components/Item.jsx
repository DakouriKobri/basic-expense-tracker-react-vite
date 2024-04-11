// Project Imports
import { formatCurrency, getDate } from '../utils';

export default function Item({ item }) {
  const { name, amount, category } = item;
  const formatCurrencyOptions = {
    style: 'currency',
    currency: 'USD',
  };

  const isIncome = category === 'income';

  return (
    <li className="list__item">
      <div>
        <h4 className="list__item-name">{name}</h4>
        <small>{getDate()}</small>
      </div>
      <div className={isIncome ? 'success' : 'danger'}>
        {isIncome ? '+' : '-'}
        {formatCurrency(amount, formatCurrencyOptions)}
      </div>
    </li>
  );
}
