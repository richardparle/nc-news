import { useState, useEffect, useContext } from "react";
import { getComments, deleteComment } from '../utils/api'
import { useParams } from "react-router-dom";
import AddComment from './AddComment'
import UserContext from "./UserContext";

const Comments = ({author}) => {

   const [comments, setComments] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   const { article_id } = useParams()
   const { loggedInUser } = useContext(UserContext);

   useEffect(() => {
      getComments(article_id)
      .then((commentsFromApi) => {
         setIsLoading(false);
         setComments(commentsFromApi)
      })
   }, [article_id, comments])

   const removeComment = (e, id, commentAuthor) => {
      e.preventDefault()
      if(commentAuthor === loggedInUser) {
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
         <AddComment comments={comments} setComments={setComments}/>
         <ul>
            {comments.map((comment => {
               const id = comment.comment_id;
               const commentAuthor = comment.author;
               
               return <li key={id} className='commentLi'>
                  {comment.body}
                  <span id="commentAuthor">{commentAuthor}</span>
               
               <button className='deleteBtn' onClick={(e) => {
                  removeComment(e, id, commentAuthor)
               }}
               >Delete Comment</button></li>
            }))}
         </ul>
      </div>
   )
}

export default Comments;