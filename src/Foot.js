import React from 'react';
import ReactDOM from 'react-dom';
import {footData} from './data.js';

class Foot extends React.Component {
	render() {
		return (
			<footer className="page-footer">
				<h2 className="footer-heading">{footData.note}</h2>
			</footer>
			);
	}
}

export default Foot;