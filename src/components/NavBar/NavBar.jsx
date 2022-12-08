import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <div className="container-fluid">
      <nav className="nav-link active" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab">
        <Link to="/" className="nav-link active" href="#">Home Page</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}!</span>
        &nbsp; | &nbsp;
        <Link to="" className="nav-link active" href="#" onClick={handleLogOut}>Log Out</Link>
      </nav>
    </div>
  );
}