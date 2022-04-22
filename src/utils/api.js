import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://fe-ncnews-project.herokuapp.com/api",
});

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `/?topic=${topic}`;
  }
  return newsApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  let path = "/articles";
  if (article_id) {
    path += `/${article_id}`;
  }
  return newsApi.get(path).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const patchVote = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => console.log({ data }));
};
