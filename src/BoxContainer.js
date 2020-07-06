import React,{Component} from 'react';
import Box from './Box';
import './Box';
class BoxContainer extends Component{
	static defaultProps ={
		numBoxes:18,
		allColors:['purple','red','green','magenta','black','brown','orange']
	
	}
	render(){
		const boxes=Array.from({length:this.props.numBoxes}).map(
			()=><Box colors={this.props.allColors}/>);
	
	return <div className="BoxContainer">{boxes}</div>;
	}
}
export default BoxContainer;