import React, { Component }  from 'react';
import {Button,Modal,ModalHeader,ModalBody,Row,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
function ModalComponent({isOpen, toggleModal}){
    const login = (values) => {
        alert('Current State is: '+JSON.stringify(values));
    }

    const required = (val) => val && val.length;
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const maxLength = (len) => (val) => (!val) || (val.length <= len);
    return(
        <Modal isOpen = {isOpen} toggle = {toggleModal}>
            <ModalHeader toggle = {toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => login(values)}>
                <Row className = "form-group">
                    <Label htmlFor = "rating">Rating</Label>
                    <Control.select model = ".rating" name="rating" className="form-control"
                     defaultValue = "2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select> 
                </Row>
                <Row className = "form-group">
                    <Label htmlFor="name">Your Name</Label>
                    <Control.text model = ".name" id = "name" className="form-control"
                     validators = {{
                         required, minLength:minLength(3) , maxLength: maxLength(15)
                     }} /> 
                     <Errors model = ".name" show = "touched" className="text-danger"
                      messages = {{
                          required:"Required",
                          minLength: "Must be more than two characters",
                          maxLength: "Must be fifteen or less characters"    
                      }} />      
                </Row>
                <Row className = "form-group">
                    <Label htmlfor = "comments">Comments</Label>
                    <Control.textarea row="6" model=".comments" id = "comments" 
                    className = "form-control"></Control.textarea>
                </Row>
                    <Button type="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
    );
}
class CommentForm extends Component{
    constructor(props){
        super(props);

    this.state = {
        isOpen: false
    }    
        this.toggleModal = this.toggleModal.bind(this);
    };

   toggleModal(){
       this.setState({
           isOpen : !this.state.isOpen
       });
   }
    render(){
        return(
            <div>
            <Button outline onClick={this.toggleModal}>
                <span className = "fa fa-pencil fa-lg">Submit Comment</span>
            </Button>
            <ModalComponent isOpen={this.state.isOpen} toggleModal = {this.toggleModal} />
            </div>
        );
    };
}

export default CommentForm;