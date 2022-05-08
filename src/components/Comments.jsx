import { useState, useEffect } from "react";
import { getComments, deleteComment } from '../utils/api'
import { useParams } from "react-router-dom";
import AddComment from './AddComment'

const Comments = ({author}) => {

   const [comments, setComments] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   const {article_id} = useParams()

   useEffect(() => {
      getComments(article_id)
      .then((commentsFromApi) => {
         setIsLoading(false);
         setComments(commentsFromApi)
      })
   }, [article_id, comments])

   const removeComment = (e, id, commentAuthor) => {
      e.preventDefault()
      if(commentAuthor === author) {
         let netComments = comments.filter(comment => comment.comment_id !== id)
         setComments(netComments)
         deleteComment(id)
      }
      else {
         alert('You can only delete your own comments')
      }
   }

   return (
      <div id="commentSection">
         <h2 id="commentHeader">Comments</h2>
         {isLoading ? <p>Loading comments</p> : null}
         <ul>
            {comments.map((comment => {
               const id = comment.comment_id;
               const commentAuthor = comment.author;
               
               return <li key={id} className='commentLi'>
                  {comment.body}
                  <span id="commentAuthor">{commentAuthor}</span>
               
               <button class='deleteBtn' onClick={(e) => {
                  removeComment(e, id, commentAuthor)
               }}
               >Delete Comment</button></li>
            }))}
         </ul>
         <AddComment />
      </div>
   )
}

export default Comments;