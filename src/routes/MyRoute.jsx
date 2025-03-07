import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ element, isClosed }) {
  const isLoggedIn = false;
  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }
  return element;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
