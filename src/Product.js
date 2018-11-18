import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Product extends React.Component {
	render() {
		const name = this.props.data.name;
		const price = this.props.data.price;
		const category = this.props.data.category;
		return (
			<div className='product' id={this.props.i}>
				<p className="id">{this.props.i}</p><p className="name">{name}</p><p className="category">{category}</p><p className="price">${price}</p>
			</div>
		);
	}
}
export default Product;