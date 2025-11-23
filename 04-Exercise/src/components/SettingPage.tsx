import UseSettingStorage from "../page/UseSettingStorage";

export default function SettingsPage() {
  const [settings, setSettings] = UseSettingStorage();

  return (
    <div>
      <h2>Settings</h2>

      <p>Language: {settings.language}</p>
      <p>Notifications: {settings.notifications ? "ON" : "OFF"}</p>

      <button
        onClick={() =>
          setSettings({ ...settings, notifications: !settings.notifications })
        }
      >
        Toggle Notifications
      </button>
    </div>
  );
}
