import {Link} from 'react-router-dom'

const Nav = () => {
   return (
      <nav>
         <Link to='/' className='navTab'>Home</Link>
         <Link to='/api/topics' className='navTab'>Topics</Link>
      </nav>
   )
}

export default Nav;