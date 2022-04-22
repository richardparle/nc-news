import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'

const IndividualArticle = () => {
   const [articles, setArticles] = useState([])
   const {article_id} = useParams()

   useEffect(() => {
      getArticle(article_id)
      .then((articlesFromApi => {
         setArticles(articlesFromApi)
      }))
   }, [article_id, articles])

return (
   <div id="articlePage">
      <div id="articleCard">
         <h2>{articles.title}</h2>
         <p>{articles.body}</p>
         <p>Author: {articles.author}</p>
         <p>Topic: {articles.topic}</p>
         <p>Votes: {articles.votes}</p>
         <p>Comment count: {articles.comment_count}</p>
      </div>
   </div>
)
}

export default IndividualArticle