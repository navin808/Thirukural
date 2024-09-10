import logo from '../../assets/images/logo.png';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header({ onSearchSubmit }) {
  return (
    <div className="header">
        <div className="brand">
            <img src={logo} alt="logo" className="logo" />
            <h6 className="header-title">உலகப் பொதுமறை</h6>
        </div>
        <SearchForm onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default Header;
