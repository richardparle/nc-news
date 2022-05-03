import { useState, useEffect } from "react";
import { getComments, deleteComment } from '../utils/api'
import { useParams } from "react-router-dom";
import AddComment from './AddComment'

const Comments = ({author}) => {

   const [comments, setComments] = useState([])
   const {article_id} = useParams()

   useEffect(() => {
      getComments(article_id)
      .then((commentsFromApi) => {
         setComments(commentsFromApi)
      })
   }, [article_id])

   const removeComment = (e, id, commentAuthor) => {
      e.preventDefault()
      console.log(id)
      console.log(author)
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
         <ul>
            {comments.map((comment => {
               const id = comment.comment_id;
               const commentAuthor = comment.author;
               
               return <li key={id} className='commentLi'>{comment.body}<button onClick={(e) => {
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