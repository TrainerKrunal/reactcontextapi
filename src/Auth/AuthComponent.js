// AuthComponent.js

// Import useContext to consume the AuthContext
import { useContext } from 'react';
import AuthContext from './AuthContext';

// Button to log in a user
const LoginButton = () => {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  return <button onClick={login}>Login</button>; // Render a button to log in
};

// Button to log out a user
const LogoutButton = () => {
  const { logout } = useContext(AuthContext); // Access the logout function from AuthContext
  return <button onClick={logout}>Logout</button>; // Render a button to log out
};

// Display the current user status
const UserStatus = () => {
  const { user } = useContext(AuthContext); // Access the user state from AuthContext
  return <p>{user ? `Welcome, ${user}` : 'Not Logged In'}</p>; // Display user status
};

const AuthComponent = () => {
  return (
    <div>
      <UserStatus /> {/* Display the current user status */}
      <LoginButton /> {/* Render the login button */}
      <LogoutButton /> {/* Render the logout button */}
    </div>
  );
};

export default AuthComponent;
