import { getArticles } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";

const Articles = () => {
   const [articles, setArticles] = useState([])

   useEffect(() => {
      getArticles()
      .then((articlesFromApi => {
         setArticles(articlesFromApi)
      }))
   }, [])
   return <div>
      <ul>
         {articles.map(article => {
            return <li key={article.article_id}>
               <h2>{article.title}</h2>
               <p>{article.author}</p>
               </li>
         })}
      </ul>
   </div>
}

export default Articles;