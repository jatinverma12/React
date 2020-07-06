import React,{Component} from 'react';

class BrokenClick extends Component{
	constructor(props){
		super(props);
		this.state={clicked:false}
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(e){
		this.setState({clicked:true});
	}
	render(){
		return (
		<div>
		<h1>{this.state.clicked ? 'Clicked':'NOt clicked'}</h1>
		<button onClick={this.handleClick}>CLick me</button>
		</div>
			)
	}
}
export default BrokenClick;