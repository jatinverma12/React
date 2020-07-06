import React,{Component} from 'react';
import{Navbar,NavbarBrand} from 'reactstrap';
import Menu from './CourseraComponents/MenuComponent';

class App extends Component{
	render(){
		return(
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">DISHES</NavbarBrand>
					</div>
				</Navbar>
				<Menu />
			</div>
			);
	}
}
export default App;