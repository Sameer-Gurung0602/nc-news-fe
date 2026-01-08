import axios from "axios";
import { useEffect, useState } from "react";
import Topic from "./topic";
function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get("https://nc-news-xnco.onrender.com/api/topics")
      .then(({ data }) => {
        setTopics(data.topics);
      });
  }, []);
  return (
    <div class="topics">
      <ol>
        {topics.map((topic) => (
          <Topic key={topic.slug} topic={topic} />
        ))}{" "}
      </ol>
    </div>
  );
}

export default Topics;
