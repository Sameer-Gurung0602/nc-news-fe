import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";
import CommentForm from "./commentform";
import Skeleton from "./skeleton";
function Comments() {
  let params = useParams();
  let article_id = params.article_id;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        setIsLoading(false);
        setComments(data.comments);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  });

  if (isLoading) {
    <Skeleton></Skeleton>;
  }
  if (error) {
    <p>{error.message}</p>;
  }
  return (
    <div class="comments">
      <h2>Comments</h2>
      <p>Write Something...</p>
      <CommentForm></CommentForm>
      <ol>
        {comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))}
      </ol>
    </div>
  );
}

export default Comments;
