import React,{Component} from 'react';
class Coin extends Component{
	render(){
		return(
				<img src={this.props.info.currCoin.imgSrc}/>
			)
	}
}
export default Coin;