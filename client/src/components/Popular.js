import React , { Component } from 'react';
import { Card, CardTitle , CardText , Nav , NavItem , NavLink } from 'reactstrap';

class Popular extends Component{
    render(){
        return(
            <div>
                <Card body>
                    <CardTitle>Popular Authors</CardTitle>
                    <CardText>
                        <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        </Nav>
                    </CardText>
                </Card>
                <Card body>
                    <CardTitle>Popular Books</CardTitle>
                    <CardText>
                        <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        </Nav>
                    </CardText>
                </Card>
                <Card body>
                    <CardTitle>Popular Categories</CardTitle>
                    <CardText>
                        <Nav vertical>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        </Nav>
                    </CardText>
                </Card> 
                <Nav>
                    <NavItem>
                        <NavLink href="/logo">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Authors</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Terms & Conditions</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    };
}

export default Popular;