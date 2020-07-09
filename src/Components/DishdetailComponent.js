import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{
	renderDish(dish){
        if(dish != null)
            return(
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
        };

    renderComments(dishComments){
    	var comments;
    	if(dishComments!=null)
	    {  comments=dishComments.map(c=>{
	    	    return(<div key={c.id} className="list-unstyled">
	  
	    	    	<h4>{c.comment}</h4>
	    	    	<h4>--{c.author},{c.date}</h4>


	    	    </div>);
	    	})
	    
	    	comments=<><h1>Comments</h1>{comments}</>
    	}
		else
    	comments=(<div></div>)

    	return comments;

    }
	
	render(){

				if(this.props.selectedDish !=null)
				return(
				<div className="container">
					<div className="row">
	                  
	                  <div  className="col-12 col-md-5 m-1">
	                    {this.renderDish(this.props.selectedDish)}
	                  </div>
	                  <div className="col-12 col-md-5 m-1" >
	                    {this.renderComments(this.props.selectedDish.comments)}
	                  </div>

	                </div>
	             </div>
				)
				else return(<div></div>) 
	}
}

export default Dishdetail;