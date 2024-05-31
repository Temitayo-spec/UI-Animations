import { Link } from 'react-router-dom';

const navLinks = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/about',
    name: 'About',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  return (
    <nav className="nav__container">
      <div className="logo">
        <Link to="/">The Dawwgs</Link>
      </div>
      <div className="nav__links">
        {navLinks.map((link, i) => (
          <div key={i}>
            <Link to={link.route}>{link.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
