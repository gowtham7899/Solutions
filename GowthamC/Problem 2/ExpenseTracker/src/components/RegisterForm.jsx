/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ addUser = () => {} }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [registered, setRegistered] = useState(false);

  const renderPhoneField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col mb-3">
        <label htmlFor="phone">Enter Phone Number</label>
        <input
          id="phone"
          className="px-3 bg-transparent border rounded-md"
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          autoComplete="off"
          required
        />
      </div>
    );
  };

  const renderEmailField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col mb-3">
        <label htmlFor="email">Enter Phone Number</label>
        <input
          id="email"
          className="px-3 bg-transparent border rounded-md"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          autoComplete="off"
          required
        />
      </div>
    );
  };

  const renderPasswordField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col mb-3">
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

  const renderConfirmPasswordField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="w-full border rounded-md">
          <input
            id="confirmPassword"
            className="outline-none px-3 bg-transparent w-10/12"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={isPassword ? "password" : "text"}
            autoComplete="off"
          />
        </div>
      </div>
    );
  };

  const onRegisterForm = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setShowError(true);
      setErrorMsg("Passwords do not match");
      return;
    }

    addUser(phone, password, email);
    setRegistered(true);
  };

  return (
    <div className="p-3 bg-slate-900 h-screen w-full font-sans flex flex-col justify-center items-center">
      <h1 className="text-gray-100 text-3xl md:text-4xl font-bold tracking-wider mb-2 text-center">
        Register Now
      </h1>
      {registered ? (
        <div className="py-9 leading-9 flex flex-col justify-center items-center rounded-lg border p-4 border-slate-100 w-full md:width-11/12 max-w-lg">
          <p className="text-gray-100">
            You have registered successfully. Click below link to login now
          </p>
          <Link to="/login" className="text-gray-100 text-center underline">
            LogIn Now
          </Link>
        </div>
      ) : (
        <div className="py-9 leading-9 flex flex-col justify-center items-center rounded-lg border p-4 border-slate-100 w-full md:width-11/12 max-w-lg">
          <p className="text-gray-100">
            Fill in the details below to register.
          </p>
          <form className="w-full leading-8 px-3" onSubmit={onRegisterForm}>
            {renderPhoneField()}
            {renderEmailField()}
            {renderPasswordField()}
            {renderConfirmPasswordField()}
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
              Register Now
            </button>
            <Link className="text-gray-100 text-center underline" to="/login">
              Already have an account? Login
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;

{
  /* <div className="w-full px-4 mt-1 flex flex-col md:flex-row-reverse justify-between text-center">
  <Link className="text-gray-100 text-sm mt-2" to="/forgot-password">
    Forgot Password?
  </Link>
  {/* <Link className="text-gray-100 text-sm mt-2" to="/reset-password">
            Reset Password
          </Link> 
  <Link className="text-gray-100 text-sm mt-2" to="/register">
    Register Now
  </Link>
</div>; */
}
