// Project Imports
import Item from './Item';
export default function ItemsList({ items }) {
  const itemsList = items.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return itemsList && <ul className="list">{itemsList}</ul>;
}
