export type Data = {
  storageKey: string;
  initialValue: number;
};

export type Settings = {
  language: string;
  notifications: boolean;
};

export const storedItem = ({ storageKey, initialValue }: Data) => {
  const stored = localStorage.getItem(storageKey);
  return stored ? Number(stored) : initialValue;
};