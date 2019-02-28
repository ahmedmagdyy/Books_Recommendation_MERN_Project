import React , { Component } from 'react';
import { Card, CardTitle , CardText , Nav , NavItem , NavLink } from 'reactstrap';

class Popular extends Component{
    
    render(){
        let rows = this.props.rows;
        const type = this.props.type;
        if(type==="authors"){
            rows = rows.map(item=>{item.data=item.first_name+" "+item.last_name; return item;});
        }
        else if(type==="books"){
            rows = rows.map(item=>{item.data=item.name; return item;});
        }
        else rows = rows.map(item=>{item.data=item.name; return item;});
        return(
            <div>
                <Card  body>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>
                        <Nav vertical>
                        {
                            rows.map(item=>{
                                return (
                                <NavItem>
                                    <NavLink href={"/"+type+"/"+item._id}>{item.data}</NavLink>
                                </NavItem>
                                )
                            })
                        }
                        </Nav>
                    </CardText>
                </Card>
                {/* <Card body>
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
                </Card>  */}
                
            </div>
        )
    };
}

export default Popular;