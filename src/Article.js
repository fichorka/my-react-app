import React from 'react';
import ReactDOM from 'react-dom';
import {homeData} from './data.js';

class Article extends React.Component {
	renderParagraphs() {
		const length = homeData.article.paragraphs.length;
		const paragraphs = [];
		for (let i = 0; i < length; i++) {
			paragraphs[i] = <p key={i} className="article-paragraph">{homeData.article.paragraphs[i]}</p>;
		}
		return paragraphs;
	}
	render() {
		
		
		return (
				<article className="article">
					<h1 className="article-heading">{homeData.article.title}</h1>
					{this.renderParagraphs()}
				</article>
			);
	}
}

export default Article;