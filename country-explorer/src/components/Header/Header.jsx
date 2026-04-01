import './header.css';
import logo from '../../assets/earth.png';

const Header = () => {
    return (
        <header className="header">
            <img src={ logo } alt="Earth Logotype" className="header__logo" />
            <h1 className="header__title">Country Explorer</h1>
            <h2 className="header__subtitle">Search for a country and explore information about it</h2>
        </header>
    )
}

export default Header;