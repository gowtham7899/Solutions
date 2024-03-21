/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./Header";
import HomeItem from "./HomeItem";
import Cookies from "js-cookie";

const Dashboard = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("loggedInToken");
    history.replace("/login");
  };
  return (
    <div className="bg-slate-900 w-full h-screen">
      <Header onClickLogout={onClickLogout} />
      <div className="h-full flex justify-center items-center text-3xl text-white bg-slate-900">
        This is Dashboard
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
