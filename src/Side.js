import React from 'react';
import ReactDOM from 'react-dom';
import {homeData} from './data.js';

class Side extends React.Component {
	
	renderParagraphs() {
		const length = homeData.side.paragraphs.length;
		const paragraphs = [];
		for (let i = 0; i < length; i++) {
			paragraphs[i] = <p className="side-paragraph">{homeData.side.paragraphs[i]}</p>;
		}
		return paragraphs;
	}
	
	render() {
		return (
			<aside className="side">
				<h1 className="side-heading">{homeData.side.title}</h1>
				{this.renderParagraphs()}
			</aside>
			);
	}
}

export default Side;