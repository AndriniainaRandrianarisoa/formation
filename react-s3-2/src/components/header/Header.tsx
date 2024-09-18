import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">LOGO</div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to='/product'>products</Link></li>
                    <li><Link to='/messages'>messages</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;