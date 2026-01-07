import axios from "axios";

function Comment({ comment }) {
  let isAuthor;
  if (comment.author === "grumpy19") {
    isAuthor = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(
        `https://nc-news-xnco.onrender.com/api/comments/${comment.comment_id}`
      )
      .then((response) => {
        console.log(response);
      });
    alert("comment has been deleted");
  };
  if (isAuthor) {
    return (
      <div>
        <li>
          <p>{comment.author}</p>
          <p>{comment.created_at.slice(0, 10)}</p>
          <p>{comment.body}</p>
          <p>{comment.votes}</p>
          <button onClick={handleSubmit}>DELETE</button>
        </li>
      </div>
    );
  }
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
