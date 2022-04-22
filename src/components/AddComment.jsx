import { useState } from "react";
import { postComments } from "../utils/api";
import { useParams } from "react-router-dom";

const AddComment = ({setComments}) => {

   const {article_id} = useParams()
   const [comment, setComment] = useState()
   const [username, setUsername] = useState()
   
   const handleSubmit = (e) => {
      e.preventDefault()
      postComments(article_id, comment, username).then((res) => {
         setComments((currComments) => [...currComments, res])
         setComment('')
         setUsername('')
      })
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

               <input type="submit" value="Submit"></input>
            </form>
         </div>
   )
}

export default AddComment