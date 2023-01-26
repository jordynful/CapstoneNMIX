import { Link } from 'react-router-dom';
import './style/components.css';
import { FaBars, FaUserCircle} from 'react-icons/fa';
function Header() {
    return (
      <div className = "outside">
  <div className = "navigation">
  <FaBars className = "bars"/>
  <Link to='/media' className='navLink'>Media</Link>
  <Link to='/music' className='navLink'>Music</Link>
  <div className = "logo"><p className = "logo2">Logo</p></div>
  <Link to='/shows' className='navLink'>Shows</Link>
  <Link to='/friends' className='navLink'>Friends</Link>
  <Link to = '/profile' className='profileLink'><FaUserCircle className = "prof"/></Link>
      </div>
      </div>
    );
  }
  
  export default Header;