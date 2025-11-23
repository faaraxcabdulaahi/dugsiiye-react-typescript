import { useEffect, useState } from "react";
import type { Settings } from "../lib/helper";

const UseSettingStorage = () => {
  const key = "setting";

  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(key);
    return stored
      ? JSON.parse(stored)
      : { language: "en", notifications: true };
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(settings));
  }, [settings]);

  return [settings, setSettings] as const;
};

export default UseSettingStorage;
