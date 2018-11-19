import React from 'react';
import ReactDOM from 'react-dom';
import {headData} from './data.js';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Head extends React.Component {
	render() {
		return (
			<header className="page-header">
				<h1 className="page-heading">{headData.title}</h1>
				<nav className="navbar">
					<NavLink exact to="/" activeClassName="selected" className="nav-link">Home</NavLink>
					<NavLink to="/products" activeClassName="selected" className="nav-link">Products</NavLink>
					<NavLink to="/about" activeClassName="selected" className="nav-link">About</NavLink>
				</nav>
			</header>
			);
		
	}
}
export default Head;