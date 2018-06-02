import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkCard from '../components/WorkCard';

class PhotoGrid extends Component {
	render () {
		return (
    		<div className="row filtr-container">
				{this.props.projects.map((project) => {
					return (
						<div className={`col-12 col-md-${project.colMd} mb-3 filtr-item`} key={`${project.title}-${project.id}`}>
							<WorkCard project={project} />
						</div>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		projects: state.projects
	};
}

export default connect(mapStateToProps)(PhotoGrid);