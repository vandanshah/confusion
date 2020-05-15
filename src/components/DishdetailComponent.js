import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Media, ListGroupItem, ListGroup} 
from 'reactstrap';
import '../App.css';
/*class DishdetailedComponent extends Component{

    constructor(props){
        super(props);
    }*/

    function RenderDish({dish}){
        if(dish != null){
            return(
                    <div className = "row">
                        <div className = "col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src = {dish.image} alt={dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>   
                        </div>
                        <div className = "col-12 col-md-5 m-1">
                            <h4> Comments </h4>
                            <RenderComments comments = {dish.comments} />
                        </div>
                    </div>
                );
            }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments != null)
        {
            return(
                <ListGroup>
                    {comments.map(c => 
                        <ListGroupItem key = {c.id} className="borderless">{c.comment}<br/>{c.detail}</ListGroupItem>
                    )}
                </ListGroup>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishdetailedComponent = (props) =>{
        return(
            <div className = "container">
                <RenderDish dish = {props.dish} />
            </div>
        );

    } 
//}

//}

export default DishdetailedComponent;