import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<p>This is the main page</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
