import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import Home from './Home';
import Products from './Products';
import About from './About';
import Foot from './Foot';
import './app.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {
	render() {
		return (
			<Router>
			<div className="app">
			
				<Head />

					<Route exact path="/" component={Home} />
					
					<Route path="/products" component={props => <Products length={10}/>} />
					
					<Route path="/about" component={About} />

				<Foot />
				
			</div>
			</Router>
			);
	}
}
export default App;