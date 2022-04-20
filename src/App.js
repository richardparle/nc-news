import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/api/topics" element={<Topics />} />
          <Route path="/api/articles/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
