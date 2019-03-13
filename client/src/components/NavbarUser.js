import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavLink,
  NavbarBrand,
  NavbarCollapse,
  NavDropdownItem,
  NavDropdownDivider,
} from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { Link } from "@reach/router";

export default class NavbarUser extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          GoodReads
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cat">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">
                Authors
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            style={{ marginRight: "10%" }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              className="btnmy-2 btn-outline-success my-sm-0"
              onClick={()=>{localStorage.removeItem('jwttoken');}}
            >
              Log out
            </button>
          </form>
          {/* <span class="inset" style={{ marginRight: '3%' }}>
                <img src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200" />
              </span> */}
          <div class="pull-right">
            <ul class="nav pull-right">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Welcome, User <b class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li class="divider" />
                  <li>
                    <a href="/auth/logout">
                      <i class="icon-off" /> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
