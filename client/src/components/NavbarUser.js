import React , { Component }from 'react';
import {Navbar , Nav , NavDropdown , Form , FormControl , Button , NavLink , NavbarBrand ,NavbarCollapse
, NavDropdownItem , NavDropdownDivider } from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import { Link } from '@reach/router';

export default class NavbarUser extends React.Component{
    // render(){
        // return(
            // <div>
                /* <Navbar bg="light" expand="lg">
                <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#link">Link</NavLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
                        <NavDropdownItem href="#action/3.2">Another action</NavDropdownItem>
                        <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
                        <NavDropdownDivider />
                        <NavDropdownItem href="#action/3.4">Separated link</NavDropdownItem>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </NavbarCollapse>
                </Navbar>;
            </div> */
            // <div>

        // )
    // }
   
    render() {
        return (
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">GoodReads</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/authors">Authors</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0" style={{ marginRight: '10%' }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              {/* <span class="inset" style={{ marginRight: '3%' }}>
                <img src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200" />
              </span> */}
              <div class="pull-right">
                <ul class="nav pull-right">
                  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Welcome, User <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                      <li class="divider"></li>
                      <li><a href="/auth/logout"><i class="icon-off"></i> Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
    }