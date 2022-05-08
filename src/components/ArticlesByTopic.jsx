import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { getArticles } from "../utils/api";
import ErrorHandling from "./ErrorHandling";

const ArticlesByTopic = () => {
   const [topicArticles, setTopicArticles] = useState([])
   const [error, setError] = useState(null);
   const {topic} = useParams()

   useEffect(() => {
      getArticles(topic)
      .then((articlesFromApi => {
         setTopicArticles(articlesFromApi)
      }))
      .catch((err) => {
         setError(err.response);
      })
   }, [topic, setTopicArticles])

   if (error) return <ErrorHandling status={error.status} msg={error.data.msg} />;
   
  return (
    <div>
       <ul>
         {topicArticles.map(article => {
            return(
                  <li key ={article.article_id}>
                  <h2>
                     <Link to={`/api/articles/${article.article_id}`}>
                        {article.title}
                     </Link>
                  </h2>
                  <p>{article.author}</p>
                  </li>
            ) 
         })}
       </ul>
    </div>
  )
}

export default ArticlesByTopic