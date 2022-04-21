import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { getArticles } from "../utils/api";

const ArticlesByTopic = () => {
   const [topicArticles, setTopicArticles] = useState([])
   const {topic} = useParams()

   useEffect(() => {
      getArticles(topic)
      .then((articlesFromApi => {
         setTopicArticles(articlesFromApi)
      }))
   }, [topic, setTopicArticles])
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