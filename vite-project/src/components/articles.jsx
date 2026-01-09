import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Article from "./article";
import { useParams, useSearchParams } from "react-router-dom";
import Skeleton from "./skeleton";
import SortBy from "./sortBy";
function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let params = useParams();
  let topic = params.topic;
  //extract out axios
  //conditional url based on params
  let url = `https://nc-news-xnco.onrender.com/api/articles`;
  let sort_by = searchParams.get("sort_by");
  let order = searchParams.get("order");

  useEffect(() => {
    axios
      .get(url, { params: { sort_by: sort_by, order: order, topic: topic } })
      .then(({ data }) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setIsLoading(false);
      });
  }, [topic, params]);

  if (isLoading) {
    return <Skeleton></Skeleton>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  // if (topic !== "coding" && topic !== "football" && topic !== "cooking") {
  //   return <p>404 not found</p>;
  // }
  if (topic) {
    return (
      <>
        <h2 id="articles-header">Articles</h2>
        <SortBy></SortBy>
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
      <SortBy></SortBy>
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
