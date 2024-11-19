export type ID = string;

export interface Item {
  id: ID;
  name: string;
  packed: boolean;
}

export interface HeaderProps {
  items: Item[];
}

export interface EmptyStateProps {
  id: ID;
  items: Item[];
  filteredItems: Item[];
}

export interface ItemListProps {
  title?: string;
  items: Item[];
  update: (id: ID, updates: Partial<Item>) => void;
  remove: (id: ID) => void;
}

export interface ItemProps {
  item: Item;
  update: (id: ID, updates: Partial<Item>) => void;
  remove: (id: ID) => void;
}

export interface MarkAllAsUnpackedProps {
  onClick: () => void;
}

export interface NewItemProps {
  newItemName: string;
  setNewItemName: (name: string) => void;
  addItem: (name: string) => void;
}

export interface ItemUpdate {
  packed?: boolean;
  name?: string;
}
