function LinksEditor({ profile, setProfile }) {
  const updateLink = (id, field, value) => {
    const updated = profile.links.map(link =>
      link.id === id ? { ...link, [field]: value } : link
    );
    setProfile(prev => ({ ...prev, links: updated }));
  };

  const addLink = () => {
    setProfile(prev => ({
      ...prev,
      links: [...prev.links, { id: Date.now().toString(), label: "", url: "" }]
    }));
  };

  return (
    <div className="section">
      <h3>Links</h3>

      {profile.links.map(link => (
        <div key={link.id} className="inline">
          <input
            value={link.label}
            onChange={e => updateLink(link.id, "label", e.target.value)}
            placeholder="Label"
          />
          <input
            value={link.url}
            onChange={e => updateLink(link.id, "url", e.target.value)}
            placeholder="URL"
          />
        </div>
      ))}

      <button onClick={addLink}>Add Link</button>
    </div>
  );
}

export default LinksEditor;
