import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Routes>
        <Route path="/" element={<p>This is the main page</p>}></Route>
        <Route path="/articles/article_id"></Route>
      </Routes>
    </div>
  );
}

export default App;
