import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/" className="logo">
                    Boooooking
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
