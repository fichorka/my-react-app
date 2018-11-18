import React from 'react';
import ReactDOM from 'react-dom';
import {mainData} from './data.js';
import './home.css';
import  Article from './Article';
import  Side from './Side';

class Home extends React.Component {
	render() {
		return (
			<main className="home main">
				<Article />
				<Side />
			</main>
			);
	}
}

export default Home;