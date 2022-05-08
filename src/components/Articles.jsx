import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Articles = () => {
   const [articles, setArticles] = useState([])
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true)
      getArticles()
      .then((articlesFromApi => {
         setArticles(articlesFromApi)
         setIsLoading(false);
      }))
   }, [])  

   const sortByDate = () => {
      const copyArticles = [...articles]
      const articlesByDate = copyArticles.sort((a,b) => {
         if(a.created_at < b.created_at) return -1
         if(b.created_at < a.created_at) return 1
         return 0
      })
      setArticles(articlesByDate)
   }

   const sortByCommentCount = () => {
      const copyArticles = [...articles]
      const articlesByCommentCount = copyArticles.sort((a,b) => {
         return a.comment_count - b.comment_count
      })
      setArticles(articlesByCommentCount)
   }

   const sortByVoteCount = () => {
      const copyArticles = [...articles]
      const articlesByVoteCount = copyArticles.sort((a, b) => {
          return a.votes - b.votes;
      })
      setArticles(articlesByVoteCount)
   }

   const reverseOrder = () => {
      const copyArticles = [...articles]
      const reversedArticles = copyArticles.reverse()
      setArticles(reversedArticles)
   }
     
   return (
   <div>
      <div id="sortBtns">
         <button className="sortBtn" onClick={() => sortByDate()}>Sort by Date</button>
         <button className="sortBtn" onClick={() => sortByCommentCount()}>Sort by Comments</button>
         <button className="sortBtn" onClick={() => sortByVoteCount()}>Sort by Votes</button>
         <button className="sortBtn" onClick={() => reverseOrder()}>Asc/Des</button>
      </div>
      {isLoading ? <p>Loading comments</p> : null}
      <ul>
            {articles.map(article => {
            return (
               <li key={article.article_id}>
               <h2>
                  <Link to={`/api/articles/${article.article_id}`}>
                  {article.title}
                  </Link>
               </h2>
               <div id="commentDetails">
                  <p>Author: {article.author}</p>
                  <p>❤️ {article.votes}</p>
                  {/* <p>Comments: {article.comment_count}</p> */}
                  <p>Date added: {article.created_at.slice(0, 10)}</p>
               </div>

               </li>
            ) 
         })}
      </ul>
   </div>
   )
}

export default Articles;
