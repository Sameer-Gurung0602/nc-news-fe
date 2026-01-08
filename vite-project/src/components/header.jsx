import { Link, useSearchParams } from "react-router-dom";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <header>
      <Link to="/">
        <h1 id="title">NC NEWS</h1>
      </Link>
    </header>
  );
}

export default Header;
