import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectRole } from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';

const RequireAuth = ({ role, allowedRoles }) => {
  const location = useLocation();
  // eslint-disable-next-line eqeqeq
  return role && role.role == allowedRoles ? (
    <Outlet />
  ) : role ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

const mapStateToProps = createStructuredSelector({
  role: selectRole,
});
export default connect(mapStateToProps)(RequireAuth);
