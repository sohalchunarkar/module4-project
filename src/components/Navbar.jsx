import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2>Social Media App</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
