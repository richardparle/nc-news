import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'
import Voting from './Voting'
import Comments from "./Comments";
import ErrorHandling from "./ErrorHandling";

const IndividualArticle = () => {
   const [article, setArticle] = useState([])
   const [error, setError] = useState(null);
   const {article_id} = useParams()
   const { author } = article
   

   useEffect(() => {
      setError(null);
      getArticle(article_id)
      .then((articleFromApi => {
         setArticle(articleFromApi)
      }))
      .catch((err) => {
         setError(err.response);
      })
   }, [article_id])

   if (error) return <ErrorHandling status={error.status} msg={error.data.msg} />;

return (
   <div id="article">
      <div id="articleSection">
         <h2>{article.title}</h2>
         <p>{article.body}</p>
         <p>Author: {article.author}</p>
         <p>Topic: {article.topic}</p>
         <p>Comment count: {article.comment_count}</p>
         <Voting article={article}/>
      </div>
         <Comments author={author}/>
   </div>
)
}

export default IndividualArticle
