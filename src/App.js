import React,{Component} from 'react';
import Main from './Components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//PROVIDER MAKES STORE AVAILABLE TO ALL THE COMPONENTS OF REACT APPLICATION
import {ConfigureStore} from './Redux/configureStore';
const store=ConfigureStore();

class App extends Component {


	render(){
		
		return(
		<Provider store={store} >
			<BrowserRouter>
			<div>
				<Main />
			</div>
			</BrowserRouter>
		</Provider>
			);

	}
}
export default App;