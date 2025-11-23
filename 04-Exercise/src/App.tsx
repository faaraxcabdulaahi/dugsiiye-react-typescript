import React from "react";
import Counter from "./components/Counter";
import LanguageSelector from "./components/Language";
import SettingsPage from "./components/SettingPage";

const App = () => {
  return (
    <div>
      <Counter />
      <LanguageSelector />
      <SettingsPage />
    </div>
  );
};

export default App;
