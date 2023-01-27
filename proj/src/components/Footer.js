
import './style/components.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
      <div className = "bottom">

  <div className = "footerNav">
<Link to = "/faq" className = "footerLink">FAQ</Link>
<Link to = "/faq" className = "footerLink">Privacy</Link>
<Link to = "/faq" className = "footerLink">Contact Us</Link>
  </div>
      </div>
    );
  }
  
  export default Footer;