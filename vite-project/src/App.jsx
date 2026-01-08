import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import ArticlePage from "./components/articlepage";
import Articles from "./components/articles";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
        <Route path="/articles/topics/:topic" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
