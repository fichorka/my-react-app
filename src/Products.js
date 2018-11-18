import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import {productsData} from './data.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './products.css';

class Products extends React.Component {
	renderProducts() {
		let select = this.props.select;
		let length = this.props.length;
		let products = new Array(length);
		for (let i = 0; i < length; i++) {
			products[i] = new Array(4);
			for (let j = 0; j < 4; j++) {
				switch(j) {
					case 0:
						products[i][j] = <p className="id">{i}</p>
						break;
					case 1:
						products[i][j] = <p className="name">{productsData.products[i].name}</p>
						break;
					case 2:
						products[i][j] = <p className="category">{productsData.products[i].category}</p>
						break;
					case 3:
						products[i][j] = <p className="price">${productsData.products[i].price}</p>
						break;
				}
			}
		}
		return products;
	}
	
	render() {
		return(
			<main className="products main">
				<h1 className="products-heading">{productsData.heading}</h1>
				<div className="products-grid">

						<p className="table-head-1">ID</p>
						<p className="table-head-2">Name</p>
						<p className="table-head-3">Category</p>
						<p className="table-head-4">Price</p>

					{this.renderProducts()}
					</div>
			</main>
			
			
		);
	}
}

export default Products;