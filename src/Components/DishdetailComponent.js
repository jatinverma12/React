import React,{Component} from 'react';

import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem,Button,Modal,ModalHeader,ModalBody,Col,Row,Label } from 'reactstrap';

import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



	function RenderDish({dish}){
        if(dish != null)
            return(
               <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                  <Card >
                      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                      <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
                </FadeTransform>
            );
        else
            return(
                <div></div>
            );
        };

    function RenderComments({dishComments,postComment,dishId}){
    	var comments;
    	if(dishComments!=null)
	    {  comments= <Stagger in>
                      {dishComments.map(c=>{
            	    	    return(
                        <Fade in>
                          <div key={c.id} className="list-unstyled">
              	  
              	    	    	<h4>{c.comment}</h4>
              	    	    	<h4>--{c.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</h4>


              	    	    </div>
                        </Fade>
                        );
            	    	})}
                </Stagger>

	    
	    	comments=<><h1>Comments</h1>{comments}
        <Comment dishId={dishId} postComment={postComment} /></>
    	}
		else
    	comments=(<div></div>)

    	return comments;

    }
const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val) || (val.length<=len);
const minLength=(len)=>(val)=>!(val) || (val.length>=len);

class Comment extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    }
    this.toggleModal=this.toggleModal.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  toggleModal(){
    this.setState({isModalOpen:!this.state.isModalOpen});
  }

  handleSubmit(values){
    if(!values.rating)
      values={...values,rating:"1"}
    this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
  }

  render(){
    return(<>
      <Button outline onClick={this.toggleModal}>Submit Comment</Button>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12} ><strong>Rating</strong></Label>
                <Col md={12}>
                  <Control.select model=".rating" name="rating" id="rating" 
                      className="form-control">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </Control.select>

                </Col>
              </Row>

               <Row className="form-group">
                  <Label htmlFor="author" md={12} ><strong>You Name</strong></Label>
                      <Col md={12} >
                          <Control.text model=".author" type="text" id="author" name="author"
                              placeholder="Your Name"
                              className="form-control"
                              validators={{
                                required,minLength:minLength(3),maxLength:maxLength(15)
                              }}
                              
                            />
                        <Errors
                              className="text-danger"
                                 model=".author"
                               show="touched"
                               messages={{
                                    required:'Required',
                                    minLength:'Must be greater than 3 characters',
                                    maxLength:'Must be 15 characters or less'
                                }}
                          />
                        

                                   
                      </Col>
                </Row>

              <Row className="form-group">
                  <Label htmlFor="comment" md={12}><strong>Comment</strong></Label>
                  <Col md={12}>
                        <Control.textarea model=".comment" id="comment" name="comment"
                          rows="6"
                          className="form-control" 
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Col>
                     <Button onClick={this.toggleModal} type="submit" color="primary">Send Feedback
                      </Button>
                  </Col>
              </Row>
            </LocalForm>

          </ModalBody>
      </Modal>
   </> );
  }
}
	const Dishdetail=(props)=>{


        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish !=null)
				return(
				<div className="container">
					<div className="row">
                		<Breadcrumb>
                  			<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  			<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                		</Breadcrumb>
                		<div className="col-12">
                  		<h3>{props.dish.name}</h3>
                  		<hr />
                		</div>
              		</div>
						<div className="row">
		                  
		                  <div  className="col-12 col-md-5 m-1">
		                    <RenderDish dish={props.dish} />
		                  </div>
		                  <div className="col-12 col-md-5 m-1" >
		                    <RenderComments dishComments={props.comments} 
                        postComment={props.postComment}
                        dishId={props.dish.id}/>
		                  </div>

		                </div>
	             </div>
				)
				else return(<div></div>) 
	}


export default Dishdetail;