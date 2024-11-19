type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

export interface Item {
  id: string;
  name: string;
  packed: boolean;
}

export interface ItemUpdates {
  name?: string;
  packed?: boolean;
}

export interface ItemListProps {
  title?: string;
  items: Item[];
  update: (id: string, updates: ItemUpdates) => void;
  remove: (id: string) => void;
}

export interface HeaderProps {
  items: Item[];
}

export interface ItemProps {
  item: Item;
  update: (id: string, updates: ItemUpdates) => void;
  remove: (id: string) => void;
}

export interface NewItemProps {
  newItemName: string;
  setNewItemName: (name: string) => void;
  addItem: (name: string) => void;
}

export interface MarkAllAsUnpackedProps {
  onClick: () => void;
}

export interface EmptyStateProps {
  id: string;
  items: Item[];
  filteredItems: Item[];
}