import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
useParams;
function CommentForm() {
  const [comment, setComment] = useState("");
  let params = useParams();
  let article_id = parseInt(params.article_id);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length === 0) {
      return;
    }
    console.log(typeof comment);
    console.log(typeof article_id);
    axios
      .post(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}/comments`,
        {
          article_id: article_id,
          body: comment,
          author: "grumpy19",
        }
      )
      .then((response) => {
        console.log(response);
      });
    setComment("");
    alert("comment has been added");
  };
  return (
    <div class="commentForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
        <button id="commentButton" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
