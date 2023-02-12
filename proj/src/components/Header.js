import { Link } from 'react-router-dom';
import './style/components.css';
import { FaBars, FaUserCircle} from 'react-icons/fa';
function Header() {
    return (
      <div className = "outside">
  <div className = "navigation">

  <Link to ='/' className = 'BarsLink'>
  <FaBars className = "bars"/>
  </Link>

  <Link to ='/' className = 'profileLink'>
    <div className = "logo">
        <p className = "logo2">Logo</p>
        </div>
        </Link>

  <Link to = '/profile' className='profileLink'><FaUserCircle className = "prof"/></Link>
      </div>
      </div>
    );
  }
  
  export default Header;