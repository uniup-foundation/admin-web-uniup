import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { logout } = useAuth0();

  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/branchs">ListBranch</Link> |{' '}
        <Link to="/branchs/new">Add Branch</Link>
      </nav>
      <button
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Logout
      </button>
    </div>
  );
}
