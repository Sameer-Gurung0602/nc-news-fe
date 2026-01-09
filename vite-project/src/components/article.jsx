import { Link } from "react-router-dom";
function Article({ article }) {
  //title, author, topic
  //votes, comment count
  //date publised
  //image
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <li>
          <div className="card">
            <img src={article.article_img_url} alt="" />

            <div className="card-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="topic">{article.topic}</p>
              <p className="author"> {article.author}</p>
              <p className="votes">Votes: {article.votes}</p>
              <p className="comments">Comments: {article.comment_count}</p>
              <p className="date"> {article.created_at.slice(0, 10)}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}

export default Article;
