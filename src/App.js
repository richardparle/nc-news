import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
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
          <Route path="/api/:topic" element={<ArticlesByTopic />} />
          <Route
            path="/api/articles/:article_id"
            element={<IndividualArticle />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
