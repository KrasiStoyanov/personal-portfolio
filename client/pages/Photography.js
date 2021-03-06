import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../actions/index';

import PhotoGrid from '../containers/PhotoGrid';

class Photography extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-dark'));
	}

	render () {
		let projects = this.props.projects;
		let pathUrl = this.props.pathUrl;

		return (
			<div className="pt-11">
		    	<div className="container pr-sm-0 pl-sm-0 pt-12 pb-12">
		    		<div className="row">
		    			<div className="col-12 col-md-8 col-lg-6 pr-2 pl-2 ">
		    				<h2 className="mb-3 text-capitalize">Photography</h2>
		    				<p className="mb-0">A newbie in photography practicing in my free time.</p>
		    			</div>
		    		</div>
		    	</div>
		    	<div id="recent-works" className="container pr-sm-0 pl-sm-0 mb-9">
	    			<PhotoGrid iterable={projects} />
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	let projects = state.photography;
	let pageUrl = ownProps.match.params.url;

	return {
		projects,
		pageUrl
	};
}

export default connect(mapStateToProps)(Photography);