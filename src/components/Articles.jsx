import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Articles = () => {
   const [articles, setArticles] = useState([])

   useEffect(() => {
      getArticles()
      .then((articlesFromApi => {
         setArticles(articlesFromApi)
      }))
   }, [])
   return (
      <div>
         <ul>
         {articles.map(article => {
            return (
               <li key={article.article_id}>
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

export default Articles;