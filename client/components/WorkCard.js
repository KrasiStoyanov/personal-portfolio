import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkCard extends Component {
	render () {
		let projectTitleForUrl = this.props.project.title.toLowerCase().split(' ').join('-');
		let projectUrl = `/portfolio${this.props.project.url}/${projectTitleForUrl}`;

		return (
		    <Link to={projectUrl} className="card d-flex flex-row work-link">
				<div className="cover-image img-fluid" style={{backgroundImage: `url(/public/${this.props.project.imageSrc})`}}></div>
				<div className="overlay"></div>
				<div className="wrapper d-flex flex-row align-self-end p-3">
					<div className="content color-white">
						<h3 className="color-white title mb-0 text-capitalize">{this.props.project.title}</h3>
					</div>
					<div className="arrow d-flex align-items-end">
						<svg className="next-arrow" viewBox="0 0 6.5 12">
							<line className="st0" x1="0" y1="-0.5" x2="6.5" y2="6.5"/>
							<line className="st0" x1="0" y1="12.5" x2="6.5" y2="5.5"/>
						</svg>
						<span className="line"></span>
					</div>
				</div>
			</Link>
		);
	}
}

export default WorkCard;