import { useState, useEffect } from "react";
import { postComments } from "../utils/api";
import { useParams } from "react-router-dom";

const AddComment = ({comments, setComments}) => {

   const {article_id} = useParams()
   const [comment, setComment] = useState()
   const [username, setUsername] = useState()
   const [isLoading, setIsLoading] = useState(false);
   
   const handleSubmit = (e) => {
      e.preventDefault()
      setIsLoading(true);
      postComments(article_id, comment, username).then((res) => {
         setComments((currComments) => [...currComments, res]);
         setIsLoading(false);
      })
      setComment('')
      setUsername('')
   }

   return (
         <div id='inputContainer'>
            <form onSubmit={(e) => {
               handleSubmit(e)
            }}>
               <label htmlFor="comment">Enter comment:</label>
               <input type="text" id="comment" name="comment" value={comment ?? ""} onChange={(e) => {
                  setComment(e.target.value)
               }}></input> 

               <label htmlFor="username">Enter username:</label>
               <input type="text" id="username" name="username" value={username ?? ""} onChange={(e) => {
                  setUsername(e.target.value)
               }}></input>

               <input type="submit" value="Submit" onClick={() => {
                  }}></input>
            </form>
            {isLoading ? <p>Loading comments</p> : null}
         </div>
   )
}

export default AddComment