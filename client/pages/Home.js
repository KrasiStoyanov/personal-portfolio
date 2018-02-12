import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterCategoryList from '../containers/FilterCategoryList';
import WorkCard from '../components/WorkCard';

class Home extends Component {
	shouldComponentUpdate () {
		return false;
	}
	
	render () {
		return (
		    <div>
		    	<div id="intro" className="container pr-sm-0 pl-sm-0 pt-12 pb-12">
		    		<div className="row">
		    			<div className="col-12 col-md-8 col-lg-6">
		    				<h2 className="color-black mb-3">Hi, I am Krasi. I am a UI Designer and a Front End Developer.</h2>
		    				<p className="mb-0">Have something to say? <span className="link-with-arrow"><a className="pr-4" href="#">Let’s talk<span className="arrow"></span></a></span></p>
		    			</div>
		    		</div>
		    	</div>
		    	<div className="container">
		    		<div className="row">
						<div className="filter-controls">
							<ul className="m-0 p-0">
								<li className="d-inline-block mr-2" data-filter="all">
									<a href="#" className="nav-link cursor-pointer pt-0 active">All</a>
								</li>
								<FilterCategoryList />
							</ul>
						</div>
		    		</div>
		    	</div>
		    	<div id="recent-works" className="container pr-sm-0 pl-sm-0 mb-9">
		    		<div className="row filtr-container">
						{this.props.projects.map((project) => {
							return (
								<div className={`col-12 col-md-${project.colMd} mb-3 filtr-item`} key={`${project.title}-${project.id}`}>
									<WorkCard project={project} />
								</div>
							);
						})}
		    		</div>
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state) {
	return {
		projects: state.projects
	};
}

export default connect(mapStateToProps)(Home);