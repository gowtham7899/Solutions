/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./Header";
import HomeItem from "./HomeItem";
import Cookies from "js-cookie";

const Home = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("loggedInToken");
    history.replace("/login");
  };
  return (
    <div className="bg-slate-900 w-full h-screen">
      <Header onClickLogout={onClickLogout} />
      <HomeItem />
    </div>
  );
};

export default withRouter(Home);
