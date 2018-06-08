import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../actions/index';
import { Link } from 'react-router-dom';

import PhotoGrid from '../containers/PhotoGrid';

class Home extends Component {
	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-dark'));
	}

	render() {
		return (
			<div className="pt-11">
		    	<div id="intro" className="container pr-sm-0 pl-sm-0 pt-12 pb-12">
		    		<div className="row">
		    			<div className="col-12 col-md-8 col-lg-6 pr-2 pl-2 ">
		    				<h2 className="mb-3 text-capitalize">Hi, I am Krasi. I am a UI Designer and a Front End Developer.</h2>
		    				<p className="mb-0">Have something to say? <span className="link-with-arrow"><Link to="/contacts" className="pr-4" href="#">Let’s talk<span className="arrow"></span></Link></span></p>
		    			</div>
		    		</div>
		    	</div>
		    	<div id="recent-works" className="container pr-sm-0 pl-sm-0 mb-9">
	    			<PhotoGrid iterable={this.props.categories} />
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	return {
		categories: state.portfolioCategories
	};
}

export default connect(mapStateToProps)(Home);