import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';



	function RenderDish({dish}){
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

    function RenderComments({dishComments}){
    	var comments;
    	if(dishComments!=null)
	    {  comments=dishComments.map(c=>{
	    	    return(<div key={c.id} className="list-unstyled">
	  
	    	    	<h4>{c.comment}</h4>
	    	    	<h4>--{c.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</h4>


	    	    </div>);
	    	})
	    
	    	comments=<><h1>Comments</h1>{comments}</>
    	}
		else
    	comments=(<div></div>)

    	return comments;

    }

	
	const Dishdetail=(props)=>{
				
				if(props.selectedDish !=null)
				return(
				<div className="container">
					<div className="row">
	                  
	                  <div  className="col-12 col-md-5 m-1">
	                    <RenderDish dish={props.selectedDish} />
	                  </div>
	                  <div className="col-12 col-md-5 m-1" >
	                    <RenderComments dishComments={props.selectedDish.comments} />
	                  </div>

	                </div>
	             </div>
				)
				else return(<div></div>) 
	}


export default Dishdetail;