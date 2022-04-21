import { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from 'react-router-dom'

const Topics = () => {
   const [topics, setTopics] = useState([])

   useEffect(() => {
      getTopics()
      .then((topicsFromApi => {
         setTopics(topicsFromApi)
      }))
   }, [])
   return <div>
      <h2 id='topic-h2'>Select a topic</h2>
      <ul>
         {topics.map(topic => {
            return <li key={topic.slug}>
               <h2>
                  <Link to={`/api/${topic.slug}`}>
                  {topic.slug}
                  </Link>
                  </h2>
            </li>
         })}
      </ul>
   </div>
}

export default Topics;