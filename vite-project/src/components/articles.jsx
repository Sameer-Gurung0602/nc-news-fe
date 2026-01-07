import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Article from "./article";
function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  //extract out axios

  useEffect(() => {
    axios
      .get("https://nc-news-xnco.onrender.com/api/articles")
      .then(({ data }) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p>Error</p>;
  }
  return (
    <>
      <h2 id="articles-header">Articles</h2>

      <div class="card-container">
        <ol>
          {articles.map((article) => (
            <Article key={article.article_id} article={article} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default Articles;
