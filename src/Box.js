import React,{Component} from 'react';
import './Box.css';
class Box extends Component{
	

	Choice(){
		let rand=Math.floor(Math.random()*this.props.colors.length);
		return this.props.colors[rand];
	}



	constructor(props){
		super(props);
		this.state={color:this.Choice()};
		this.Choice=this.Choice.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){

		let newColor=this.Choice();
		while(newColor===this.state.color)
		{
			newColor=this.Choice();
		}
		this.setState({color:newColor});
	}
	
	render(){
		return(
			<div className="Box" style={{backgroundColor:this.state.color}} onClick={this.handleClick}>

			</div>
			)
	}
}
export default Box;