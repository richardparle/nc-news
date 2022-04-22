import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'
import Voting from './Voting'
import Comments from "./Comments";

const IndividualArticle = () => {
   const [article, setArticle] = useState([])
   const {article_id} = useParams()

   useEffect(() => {
      getArticle(article_id)
      .then((articleFromApi => {
         setArticle(articleFromApi)
      }))
   }, [article_id])



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
      
   </div>
)
}

export default IndividualArticle
