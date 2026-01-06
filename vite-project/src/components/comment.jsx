function Comment({ comment }) {
  return (
    <div>
      <li>
        <p>{comment.author}</p>
        <p>{comment.created_at.slice(0, 10)}</p>
        <p>{comment.body}</p>
        <p>{comment.votes}</p>
      </li>
    </div>
  );
}
export default Comment;
