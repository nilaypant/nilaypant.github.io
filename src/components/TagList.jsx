export default function TagList({ tags = [] }) {
  if (!tags.length) {
    return null;
  }

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
