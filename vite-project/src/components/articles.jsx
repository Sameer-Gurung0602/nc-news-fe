import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Article from "./article";
import { useParams } from "react-router-dom";
import Skeleton from "./skeleton";
function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  let params = useParams();
  let topic = params.topic;
  //extract out axios
  //conditional url based on params
  let url = `https://nc-news-xnco.onrender.com/api/articles`;
  if (topic) {
    console.log(topic);
    url += `?topic=${topic}`;
    console.log(url);
  }
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
  }, [topic]);

  if (isLoading) {
    return <Skeleton></Skeleton>;
  }
  if (error) {
    <p>{error.message}</p>;
  }
  if (topic) {
    return (
      <>
        <h2 id="articles-header">Articles</h2>
        <h3>{topic}</h3>
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
