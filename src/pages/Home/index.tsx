import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LinkWithCheckedPermissions from '../../components/Global/LinkWithCheckedPermissions';
import PermissionsList from '../../config/permissionsList';

const LinkListBranch = LinkWithCheckedPermissions(PermissionsList.READ_BRANCHS);
const LinkCreateBranch = LinkWithCheckedPermissions(
  PermissionsList.CREATE_BRANCHS,
);

export default function Home() {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <LinkListBranch to="/branchs">ListBranch</LinkListBranch> |
        <LinkCreateBranch to="/branchs/new">Add Branch</LinkCreateBranch> |
        <Link to="/profile">Profile</Link>
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
