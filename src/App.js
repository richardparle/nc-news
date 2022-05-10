import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ErrorHandling from "./components/ErrorHandling";
import { useState } from "react";
import UserContext from "./components/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("grumpy19");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/:topic" element={<ArticlesByTopic />} />
            <Route
              path="/articles/:article_id"
              element={<IndividualArticle />}
            />
            <Route
              path="*"
              element={
                <ErrorHandling status="404" msg="This page does not exist" />
              }
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
