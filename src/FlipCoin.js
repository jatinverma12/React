import React,{Component} from 'react';
import Coin from './Coin';
class FlipCoin extends Component{
	static defaultProps={
		coins:[
			{side:"heads",imgSrc:"http://tinyurl.com/react-coin-heads-jpg"},
			{side:"tails",imgSrc:"http://tinyurl.com/react-coin-tails-jpg"}
		]
	}
	
	constructor(props){
		super(props);
		this.state={
			currCoin:null,
			head:0,
			tail:0,
			trials:0
		}
		this.handleClick=this.handleClick.bind(this);
	
	}
	handleClick(e){
		let num=Math.floor(Math.random()*2);
		let newcurrCoin=this.props.coins[num];
		
		let newState={...this.state,
			currCoin:newcurrCoin,
			trials:this.state.trials+1
			}

		if(newState.currCoin.side==="heads")
			newState.head+=1;
		else
			newState.tail+=1;

		this.setState(newState);

	}
	render(){
		return(

			<div>
			{this.state.currCoin && <Coin info={this.state}/>}
			<button onClick={this.handleClick}>Flip Me</button>
			<h1>Out of {this.state.trials} flips,there are {this.state.head} heads and {this.state.tail} tails</h1>
			</div>
			)
	}
}
export default FlipCoin;