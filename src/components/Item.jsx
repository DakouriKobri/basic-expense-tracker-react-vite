// Project Imports
import { getDate } from '../utils';

export default function Item({ item }) {
  const { name, amount, category } = item;

  return (
    <li className="list__item">
      <div>
        <h4>{name}</h4>
        <small>{getDate()}</small>
      </div>
      <div>
        {category === 'income' ? '+' : '-'}${amount}
      </div>
    </li>
  );
}
