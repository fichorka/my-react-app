import React from 'react';
import ReactDOM from 'react-dom';
import {aboutData} from './data.js';

class About extends React.Component {
	render() {
		return (
			<main className="about main">
				<h1 className="about-heading">{aboutData.title}</h1>
				<p className="about-paragraph">{aboutData.content}</p>
				<p className="about-paragraph">{aboutData.content}</p>
				<img src={require("./assets/images/about1.jpeg")} className="about-image" alt="city landscape" />
			</main>
			);
	}
}

export default About;