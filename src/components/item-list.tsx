import { useState } from 'react';
import { filterItems } from '../lib/items';
import { toKebabCase } from '../lib/kebab-case';
import Item from './items';
import { EmptyStateProps, ItemListProps, Item as ItemType } from '../types';

const EmptyState = ({ id }: EmptyStateProps) => (
  <p id={id} className="text-primary-400">
    (No items.)
  </p>
);

const ItemList = ({
  title = 'Items',
  items,
  update,
  remove,
}: ItemListProps) => {
  const [filter, setFilter] = useState<string>('');
  const id = toKebabCase(title);

  const filteredItems = filterItems(items, { name: filter });
  const isEmpty = !items.length;

  return (
    <section id={id} className="w-full border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <label htmlFor={`${id}-filter`} className="hidden"></label>
        <input
          id={`${id}-filter`}
          placeholder="Filter"
          className="my-2 w-full py-1"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </header>
      <ul className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} update={update} remove={remove} />
        ))}
      </ul>
      {isEmpty && (
        <EmptyState
          id={`${id}-empty-state`}
          items={items}
          filteredItems={filteredItems}
        />
      )}
    </section>
  );
};

export default ItemList;