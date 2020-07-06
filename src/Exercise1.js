import React,{Component} from 'react';

class Exercise1 extends Component{
	constructor(props){
		super(props);
		this.state={num:1};
		this.gen=this.gen.bind(this);
	}

	gen(){
		let n=Math.floor(Math.random()*10);
			this.setState({num:n});

	}
	render(){
		return(
		<div>
			<h1>Number is {this.state.num}</h1>
			{this.state.num===7  
				 ? <h1>You WIn!!</h1>
				 :  <button onClick={this.gen}>RandomNUmber</button>
			}
			
		</div>
			);
	}
}
export default Exercise1;