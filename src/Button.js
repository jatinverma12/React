import React,{Component} from 'react';

class Button extends Component{
	render(){
		return(
		<button onClick={function(){alert('CLICKED');}}>CLick Me</button>
			)
	}
}
export default Button;