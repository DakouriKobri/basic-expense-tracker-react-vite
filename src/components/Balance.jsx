export default function Balance({ balance }) {
  return (
    <div className="balance">
      {balance > 0 && '+'}
      {balance}
    </div>
  );
}
