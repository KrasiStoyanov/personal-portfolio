import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkCard from '../components/WorkCard';

class PhotoGrid extends Component {
	render () {
		return (
    		<div className="row filtr-container">
				{this.props.categories.map((project) => {
					return (
						<div className={`col-12 col-md-6 col-lg-${project.colMd} mb-2 mb-md-3 pr-2 pl-2 filtr-item`} key={`${project.title}-${project.id}`}>
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
		categories: state.portfolioCategories
	};
}

export default connect(mapStateToProps)(PhotoGrid);