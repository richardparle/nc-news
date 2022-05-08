import { useState } from "react";
import { useParams } from "react-router-dom";
import {patchIncreaseVote, patchDecreaseVote} from "../utils/api";

const Voting = (props) => {
   const [vote, setVote] = useState(0)
   const {article_id} = useParams()

   const upVote = () => setVote((currVotes) => currVotes +1);
   const downVote = () => setVote((currVotes) => currVotes -1);

   return (
      <div className="btns">
         <p id="btn-p">Votes: {vote + props.article.votes}</p>
         <button className="arrowBtn" onClick={() => {
            upVote()
            patchIncreaseVote(article_id)
            .then()
         }
            }>⬆️</button>
         <button className="arrowBtn" onClick={() =>{
            downVote()
            patchDecreaseVote(article_id)
            .then()
         } }>⬇️</button>
      </div>
   )
}

export default Voting