function ThemeEditor({ profile, setProfile }) {
  const update = (field, value) => {
    setProfile(prev => ({
      ...prev,
      theme: { ...prev.theme, [field]: value }
    }));
  };

  return (
    <div className="section">
      <h3>Theme</h3>

      <select
        value={profile.theme.mode}
        onChange={e => update("mode", e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <input
        type="color"
        value={profile.theme.accentColor}
        onChange={e => update("accentColor", e.target.value)}
      />
    </div>
  );
}

export default ThemeEditor;
