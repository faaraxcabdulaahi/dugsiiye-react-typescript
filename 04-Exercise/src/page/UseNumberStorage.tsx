import { useEffect, useState } from "react";
import { storedItem, type Data } from "../lib/helper";

const UseNumberStorage = ({ storageKey, initialValue }: Data) => {
  const [value, setValue] = useState(() =>
    storedItem({ storageKey, initialValue })
  );

  useEffect(() => {
    localStorage.setItem(storageKey, String(value));
  }, [storageKey, value]);

  return [value, setValue] as const;
};

export default UseNumberStorage;
