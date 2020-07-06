import React,{Component} from 'react';

class ShoppingListForm extends Component{

	constructor(props){
			super(props);
			this.state={food:" ",qty:" "};
			this.handleChange=this.handleChange.bind(this);
			this.handleSubmit=this.handleSubmit.bind(this);
		}

		handleChange(evt){
			this.setState({
				[evt.target.name]:evt.target.value
			});
		};

		handleSubmit(evt){
			evt.preventDefault();
			this.props.addItems(this.state);
			this.setState({
				food:" ",
				qty: " "
			});
		}

	render(){

		return(
			<form onSubmit={this.handleSubmit}>
			<label htmlFor="food">Food</label>

			<input type="text"
			name="food"
			value={this.state.food}
			onChange={this.handleChange}
			/>

			<label htmlFor="qty">Quantity</label>

			<input type="number"
			name="qty"
			value={this.state.qty}
			onChange={this.handleChange}
			/>

			<button>Submit</button>


			</form>
			);
	}
}
export default ShoppingListForm;