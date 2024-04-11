// Project Imports
import { formatCurrency } from '../utils';

export default function Balance({ balance }) {
  return (
    <div className="balance">
      {balance > 0 && '+'}
      {formatCurrency(balance)}
    </div>
  );
}
