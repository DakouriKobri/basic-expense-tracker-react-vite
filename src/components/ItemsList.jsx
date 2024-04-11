// Project Imports
import Item from './Item';

export default function ItemsList({ items }) {
  const itemsList = items.map((item) => {
    const itemKey = `${new Date().getMilliseconds()}-${Math.random()}`;

    return <Item key={itemKey} item={item} />;
  });

  return itemsList && <ul className="list">{itemsList}</ul>;
}
