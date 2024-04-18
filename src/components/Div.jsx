export function Div({ className, content, contentText }) {
  if (contentText !== undefined || contentText !== null) {
    return (
      <div className={className}>
        <p className="firstChildExercises">{contentText}</p>
        {content}
      </div>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}