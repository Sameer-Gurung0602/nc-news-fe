import axios from "axios";
import { useEffect, useState } from "react";

function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get("https://nc-news-xnco.onrender.com/api/topics").then((data) => {
      setTopics(data.topics);
    });
  }, []);
  return (
    <div class="topics">
      <ol>
        <li></li>
      </ol>
    </div>
  );
}
