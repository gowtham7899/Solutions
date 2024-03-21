import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const token = Cookies.get("loggedInToken");

  if (token === undefined) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
