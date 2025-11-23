import { useLocalStorage } from "../page/UseLocalStorage";

export default function LanguageSelector() {
  const [lang, setLang] = useLocalStorage<string>("lang", "en");

  return (
    <div>
      <p>Current language: {lang}</p>

      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("ar")}>Arabic</button>
    </div>
  );
}
