import { Link } from 'react-router-dom';
import withPermission from '../../../hoc/withPermissions';

const LinkWithCheckedPermissions = (permission: string) =>
  withPermission(Link, permission);
export default LinkWithCheckedPermissions;
