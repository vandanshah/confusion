import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Media, ListGroupItem, ListGroup, Breadcrumb,BreadcrumbItem} 
from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import CommentForm from './CommentFormComponent';
/*class DishdetailedComponent extends Component{

    constructor(props){
        super(props);
    }*/

    function RenderDish(props){
        if(props.dish != null){
            return(
                    <div className = "row">
                        <div className = "col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src = {props.dish.image} alt={props.dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>   
                        </div>
                        <div className = "col-12 col-md-5 m-1">
                            <h4> Comments </h4>
                            <RenderComments comments = {props.comment} />
                            <CommentForm />
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
                        <ListGroupItem key = {c.id} className="borderless">{c.comment}<br/>{c.author}{c.date}</ListGroupItem>
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
        if(props.dish != null)
        return(
            <div className = "container">
               <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem> 
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem> 
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} comment={props.comments} />
                </div>
            </div>
        );

    } 
//}

//}

export default DishdetailedComponent;