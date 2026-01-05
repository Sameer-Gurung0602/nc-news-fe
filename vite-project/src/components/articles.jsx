import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Article from "./article";
function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const url = "https://nc-news-xnco.onrender.com/api/articles";
  //extract out axios

  useEffect(() => {
    axios
      .get(url)
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
    <div class="articles">
      <h2>Articles</h2>
      <ol>
        {articles.map((article) => (
          <Article key={article.article_id} article={article} />
        ))}
      </ol>
    </div>
  );
}

export default Articles;
