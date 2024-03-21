/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { withRouter } from "react-router-dom";

const OTPVerification = (props) => {
  const { username = "" } = props;
  const [otp, setOtp] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmitOtp(event);
    }
  };

  const renderOtpField = () => {
    return (
      <div className="w-full text-gray-100 flex flex-col mb-3">
        <label htmlFor="OTP">Enter OTP</label>
        <input
          id="OTP"
          className="px-3 bg-transparent border rounded-md"
          placeholder="Please enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="number"
          autoComplete="off"
          onKeyDown={onEnterKeyDown}
        />
      </div>
    );
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    setOtpSuccess(true);
  };

  const goToLogin = () => {
    const { history } = props;
    history.push("/login");
  };

  return (
    <>
      {otpSuccess ? (
        <>
          <p className="text-gray-100 text-2xl">
            Great, your password has been sent to your registered email id
          </p>
          <button
            onClick={goToLogin}
            className="bg-blue-500 rounded-lg mt-6 text-gray-200 font-serif cursor-pointer w-full"
          >
            Back to Login
          </button>
        </>
      ) : (
        <>
          <p className="text-gray-100 text-lg">
            Please enter the OTP sent to{" "}
            <span className="font-bold text-xl">{username}</span>
          </p>

          <form className="w-full leading-8 px-3 mt-3" onSubmit={onSubmitOtp}>
            {renderOtpField()}
            <button
              className="w-full bg-blue-500 rounded-lg mt-6 text-gray-200 font-serif cursor-pointer"
              type="submit"
            >
              Submit OTP
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default withRouter(OTPVerification);
