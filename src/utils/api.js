import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-iwtz.onrender.com/api",
});

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `/?topic=${topic}`;
  }
  return newsApi.get(path).then(({ data }) => {
    return data;
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

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchIncreaseVote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};
export const patchDecreaseVote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: -1 });
};

export const postComments = (article_id, body, username) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      body: body,
      username: username,
    })
    .then((dataObj) => {
      console.log(dataObj.data.data.body, "dataObj");
      return dataObj.data.data.body;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
