import {Link} from 'react-router-dom';
import { useContext } from "react";
import UserContext from "./UserContext"

const Nav = () => {
   const { loggedInUser } = useContext(UserContext);
   return (
         <div className='navAndHeader'>
            <nav>
               <Link to='/' className='navTab'>Home</Link>
               <Link to='/topics' className='navTab'>Topics</Link>
            </nav>
            <div>
             <p className="loggedInUser">{loggedInUser} is logged in.</p>
            </div>
         </div>
   )
}

export default Nav;