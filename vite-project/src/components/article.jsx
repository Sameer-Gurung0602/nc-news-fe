import { Link } from "react-router-dom";
function Article({ article }) {
  //title, author, topic
  //votes, comment count
  //date publised
  //image
  console.log(article);
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <li>
          <div id="article">
            <h3>{article.title}</h3>
            <p>topic/{article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count} </p>
            <p>Date: {article.created_at.slice(0, 10)}</p>
            <img src={article.article_img_url} alt="" />
          </div>
        </li>
      </Link>
    </>
  );
}

export default Article;
