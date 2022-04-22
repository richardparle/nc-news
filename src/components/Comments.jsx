import { useState, useEffect } from "react";
import { getComments } from '../utils/api'
import { useParams } from "react-router-dom";

const Comments = () => {

   const [comments, setComments] = useState([])
   const {article_id} = useParams()

   useEffect(() => {
      getComments(article_id)
      .then((commentsFromApi) => {
         console.log(commentsFromApi)
         setComments(commentsFromApi)
      })
   }, [article_id])

   return (
      <div id="commentSection">
         <h2 id="commentHeader">Comments</h2>
         <ul>
            {comments.map((comment => {
               console.log(comments)
               return <li key={comment.comment_id} className='commentLi'>{comment.body}</li>
            }))}
         </ul>
      </div>
   )
}

export default Comments;