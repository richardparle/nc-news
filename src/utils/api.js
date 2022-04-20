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

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
