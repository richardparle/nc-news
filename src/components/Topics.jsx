import { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from 'react-router-dom'

const Topics = () => {
   const [topics, setTopics] = useState([])
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true)
      getTopics()
      .then((topicsFromApi => {
         setTopics(topicsFromApi)
         setIsLoading(false);
      }))
   }, [])
   
   return <div>
      <h2 id='topic-h2'>Select a topic</h2>
      {isLoading ? <p>Loading comments</p> : null}
      <ul>
         {topics.map(topic => {
            return <li key={topic.slug}>
               <h2>
                  <Link to={`/${topic.slug}`}>
                  {topic.slug}
                  </Link>
                  </h2>
            </li>
         })}
      </ul>
   </div>
}

export default Topics;