import React,{Component} from 'react';
import{Navbar,NavbarBrand} from 'reactstrap';
import Menu from './CourseraComponents/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends Component{
	render(){
		return(
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">DISHES</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={DISHES}/>
			</div>
			);
	}
}
export default App;