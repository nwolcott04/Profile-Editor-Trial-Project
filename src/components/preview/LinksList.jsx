function LinksList({ links }) {
  return (
    <div className="links">
      {links.map(link => (
        <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
          {link.label || "Untitled"}
        </a>
      ))}
    </div>
  );
}

export default LinksList;
