import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Comments from "./comments";
import Votes from "./votes";
import Skeleton from "./skeleton";
function ArticlePage() {
  let params = useParams();
  let article_id = params.article_id;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);
  //extract out axios

  useEffect(() => {
    axios
      .get(`https://nc-news-xnco.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        setIsLoading(false);
        setArticle(data.article);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setIsLoading(false);
      });
  }, [article]);

  if (isLoading) {
    return <Skeleton></Skeleton>;
  }
  if (error) {
    <p>{error.message}</p>;
  }

  return (
    <>
      <div class="articlePage">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="" />
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.created_at.slice(0, 10)}</p>
        <p>{article.body}</p>
        <Votes vote={article.votes}></Votes>
        <p>comments: {article.comment_count}</p>
      </div>

      <Comments></Comments>
    </>
  );
}
export default ArticlePage;
