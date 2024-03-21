/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = ({ onClickLogout }) => {
  const logoutAccount = () => {
    onClickLogout();
  };

  return (
    <header className="h-13 w-full flex justify-evenly items-center bg-slate-600">
      <Link className="text-gray-100 text-lg" to="/">
        Expense Tracker
      </Link>
      <nav className="w-3/12 flex justify-between items-center">
        <Link className="text-gray-100 text-lg" to="/">
          Home
        </Link>
        <Link className="text-gray-100 text-lg" to="/dashboard">
          Dashboard
        </Link>
        <Link className="text-gray-100 text-lg" to="/profile">
          Profile
        </Link>
      </nav>
      <button
        onClick={logoutAccount}
        type="button"
        className=" h-11 text-gray-100 text-center bg-cover p-3"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
