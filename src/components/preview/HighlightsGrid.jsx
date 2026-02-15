function HighlightsGrid({ highlights }) {
  return (
    <div className="highlights">
      {highlights.map(item => (
        <div key={item.id} className="highlight">
          {item.image && <img src={item.image} alt="" />}
          <h4>{item.title}</h4>
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default HighlightsGrid;
