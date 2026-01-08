import { Link } from "react-router-dom";

function Topic({ topic }) {
  return (
    <>
      <Link to={`/articles/topics/${topic.slug}`}>
        <li>{topic.slug}</li>
      </Link>
    </>
  );
}

export default Topic;
