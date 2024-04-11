// Project Imports
import { formatCurrency } from '../utils';

export default function Balance({ balance }) {
  const balanceStyle = balance > 0 ? 'success' : balance < 0 ? 'danger' : '';
  const balanceSign = balance > 0 ? '+' : '';

  return (
    <div className={`balance ${balanceStyle}`}>
      {balanceSign}
      {formatCurrency(balance)}
    </div>
  );
}
