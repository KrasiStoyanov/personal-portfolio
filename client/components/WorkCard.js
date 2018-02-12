import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkCard extends Component {
	render () {
		return (
			<Link to={`${this.props.project.url}/${this.props.project.id}`} className="h-100 card d-flex flex-row work-link">
				<div className="cover-image img-fluid" style={{backgroundImage: `url(/public/${this.props.project.imageSrc})`}}></div>
				<div className="overlay"></div>
				<div className="wrapper d-flex flex-row align-self-end pr-3 pb-3 pl-3">
					<div className="content color-white">
						<small className="date">{this.props.project.date}</small>
						<h3 className="title mb-0 text-capitalize">{this.props.project.title}</h3>
					</div>
					<div className="arrow d-flex align-items-end">
						<span className="line"></span>
					</div>
				</div>
			</Link>
		);
	}
}

export default WorkCard;