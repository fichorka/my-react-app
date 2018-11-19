import React from 'react';
import ReactDOM from 'react-dom';
import {productsData} from './data.js';

class Products extends React.Component {
	renderProducts() {
		let length = this.props.length;
		let products = new Array(length);
		for (let i = 0; i < length; i++) {
			products[i] = new Array(4);
			for (let j = 0; j < 4; j++) {
				switch(j) {
					case 0:
						products[i][j] = <p key={i+j} className="id">{i}</p>
						break;
					case 1:
						products[i][j] = <p key={i+j} className="name">{productsData.products[i].name}</p>
						break;
					case 2:
						products[i][j] = <p key={i+j} className="category">{productsData.products[i].category}</p>
						break;
					case 3:
						products[i][j] = <p key={i+j} className="price">${productsData.products[i].price}</p>
						break;
					default:
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

						<p className="th-1">ID</p>
						<p className="th-2">Name</p>
						<p className="th-3">Category</p>
						<p className="th-4">Price</p>

					{this.renderProducts()}
					</div>
			</main>
			
			
		);
	}
}

export default Products;