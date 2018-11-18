import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import Home from './Home';
import Products from './Products';
import About from './About';
import Foot from './Foot';
import './app.css';
import * as data from './data.js';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends React.Component {
	render() {
		return (
			<Router>
			<div className="app">
			
				<Head />

					<Route exact path="/" component={Home} />
					
					<Route path="/products" component={props => <Products select={0} length={10}/>} />
					
					<Route path="/about" component={About} />

				<Foot />
				
			</div>
			</Router>
			);
	}
}
export default App;