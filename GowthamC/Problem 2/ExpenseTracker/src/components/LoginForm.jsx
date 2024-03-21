/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import Cookies from "js-cookie";

const LoginForm = (props) => {
  const { users } = props;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const renderUserNameField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col mb-3">
        <label htmlFor="username">Email/Mobile Number</label>
        <input
          id="username"
          className="px-3 bg-transparent border rounded-md"
          placeholder="Enter Email or Phone Number"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          autoComplete="off"
        />
      </div>
    );
  };

  const renderPasswordField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col">
        <label htmlFor="password">Password</label>
        <div className="w-full border rounded-md">
          <input
            id="password"
            className="outline-none px-3 bg-transparent w-10/12"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isPassword ? "password" : "text"}
            autoComplete="off"
          />
        </div>
      </div>
    );
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setShowError(true);
      setErrorMsg("Please enter a username and password");
      return;
    } else if (username === "") {
      setShowError(true);
      setErrorMsg("Please enter a username");
      return;
    } else if (password === "") {
      setShowError(true);
      setErrorMsg("Please enter a password");
      return;
    }

    const userDetails = users.filter((user) => user.username === username);

    if (userDetails.length <= 0) {
      setShowError(true);
      setErrorMsg("User not found");
      return;
    }

    if (userDetails[0].password !== password) {
      setShowError(true);
      setErrorMsg("Password is incorrect");
      return;
    }

    const { history } = props;
    Cookies.set("loggedInToken", "apashyampamkirikiriLoginSuccess", {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  };

  return (
    <div className="p-3 bg-slate-900 h-screen w-full font-sans flex flex-col justify-center items-center">
      <h1 className="text-gray-100 text-3xl md:text-4xl font-bold tracking-wider mb-2 text-center">
        Expense Tracker
      </h1>
      <div className="py-9 leading-9 flex flex-col justify-center items-center rounded-lg border p-4 border-slate-100 w-full md:width-11/12 max-w-lg">
        <p className="text-gray-100">Login to see your details</p>
        <form className="w-full leading-8 px-3" onSubmit={onSubmitForm}>
          {renderUserNameField()}
          {renderPasswordField()}
          <div className="w-full flex justify-between">
            {showError && (
              <p className="text-xs text-red-600 italic w-1/2">*{errorMsg}</p>
            )}
            <div className="w-full items-center">
              <input
                className="h-3 w-3 rounded-full ml-auto"
                type="checkbox"
                id="show-hide-password"
                onChange={() => setIsPassword((prev) => !prev)}
              />
              <label
                className="text-gray-100 ml-1 text-xs"
                htmlFor="show-hide-password"
              >
                {isPassword ? "Show" : "Hide"} Password
              </label>
            </div>
          </div>
          <button
            className="w-full bg-blue-500 rounded-lg mt-6 text-gray-200 font-serif cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="w-full px-4 mt-1 flex flex-col md:flex-row-reverse justify-between text-center">
          <Link className="text-gray-100 text-sm mt-2" to="/forgot-password">
            Forgot Password?
          </Link>
          {/* <Link className="text-gray-100 text-sm mt-2" to="/reset-password">
            Reset Password
          </Link> */}
          <Link className="text-gray-100 text-sm mt-2" to="/register">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
