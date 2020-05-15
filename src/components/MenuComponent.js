import React, { Component} from 'react';
import { Card, CardBody, CardText, CardImg, CardImgOverlay, CardTitle } 
from 'reactstrap';
import DishdetailedComponent from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);

       /* this.state = {
           selectedDish: null
            };*/
        console.log('MenuComponent constructor is invoked.');
    }

    /*onDishSelect(dish){
        console.log(dish.name);
        this.setState({selectedDish:dish});
    }*/

    /*renderDish(dish){
        if(dish != null)
        {
            console.log(dish.name);
            return(
                <div className="container">
                   {/* <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText> 
                    </CardBody>
                   </Card> 
                  
                    <DishdetailComponent dish={dish} />
                </div>
            ); 
        }
        else
        {
            return(
                <div></div>
            );
        }
    }*/

    componentDidMount(){
        console.log('MenuComponent componentDidMount is invoked.');
    }
    render(){
        console.log('MenuComponent render is invoked');
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    {/*<Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
            </Card>*/}
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>

                </div>
            ); 
        });
        return (
            <div className = "container">
                <div className = "row">
                    {menu}
                </div>
                {/*<DishdetailedComponent dish={this.state.selectedDish} /> */}  
            </div>   
        );
        
    }
}

export default Menu;