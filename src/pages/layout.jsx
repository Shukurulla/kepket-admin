import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ activePage }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="side-bar">
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="navigations">
              <ul>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/dishes"}>Taomlar</Link>
                </li>
                <li>
                  <Link to={"/categories"}>Kategoriyalar</Link>
                </li>
                <li>
                  <Link to={"/waiters"}>Ofitsiantlar</Link>
                </li>
                <li>
                  <Link to={"/tables"}>Stollar</Link>
                </li>
                <li>
                  <Link to={"/report"}>Hisobotlar</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">{activePage}</div>
      </div>
    </div>
  );
};

export default Layout;
