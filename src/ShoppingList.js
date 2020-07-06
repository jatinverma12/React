import React,{Component} from 'react';
import ShoppingListForm from './ShoppingListForm';
class ShoppingList extends Component{
	constructor(props){
		super(props);
		this.state={
		items:[
			{food:"milk",qty:5},
			{food:"bread",qty:6}
		]};
		this.addItem=this.addItem.bind(this);
		this.renderItems=this.renderItems.bind(this);
	};

	addItem(item){
			this.setState(state=>(
				{
					items:[...state.items,item]
				}

			));
			
	}

	renderItems(){

		return(
				<ul>
					{this.state.items.map(item=>(
						<li>{item.food}-{item.qty}</li>

						))}

				</ul>
		)
	}
	render(){
		return(
			<div>
				<h1>Shopping List</h1>
					{this.renderItems()}
				<ShoppingListForm addItems={this.addItem}/>
			</div>
			);
	}
}
export default ShoppingList;