function HighlightsEditor({ profile, setProfile }) {
  const update = (id, field, value) => {
    const updated = profile.highlights.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setProfile(prev => ({ ...prev, highlights: updated }));
  };

  const addHighlight = () => {
    setProfile(prev => ({
      ...prev,
      highlights: [
        ...prev.highlights,
        { id: Date.now().toString(), title: "", image: "", caption: "" }
      ]
    }));
  };

  return (
    <div className="section">
      <h3>Highlights</h3>

      {profile.highlights.map(item => (
        <div key={item.id}>
          <input
            value={item.title}
            onChange={e => update(item.id, "title", e.target.value)}
            placeholder="Title"
          />
          <input
            value={item.image}
            onChange={e => update(item.id, "image", e.target.value)}
            placeholder="Image URL"
          />
          <input
            value={item.caption}
            onChange={e => update(item.id, "caption", e.target.value)}
            placeholder="Caption"
          />
        </div>
      ))}

      <button onClick={addHighlight}>Add Highlight</button>
    </div>
  );
}

export default HighlightsEditor;
