import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../actions/index';

class About extends Component {
	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-dark'));
	}

	render() {
		return (
			<div className="pt-11">
				<div id="about" className="container pr-sm-0 pl-sm-0 pt-12 pb-12">
		    		<div className="row align-items-center">
		    			<section className="section col-12 col-lg-6">
		    				<img className="w-100" src="images/about.jpg" alt="About iamge"/>
		    			</section>
		    			<section className="section col-12 col-lg-6 pl-5">
                            <small className="title text-uppercase text-primary mb-1">Krasi Stoyanov</small>
		    				<h2 className="color-black mb-3 text-capitalize">UI Designer and Front End Developer</h2>
		    				<p className="mb-0">A 20-year-old prodigy, combining design and front-end skills, volunteering in different causes and a great team-player, who will never leave you on your own. Extremely diligent, life-time learner, with the intention to become a front-end grand master.
		    				<br/>
		    				<br/>
		    				Currently a 2nd year Game Design & Development student <a href="https://www.hanze.nl/nld" target="_blank">@Hanzehogeschool</a> Groningen.</p>
		    			</section>
		    		</div>
		    	</div>
			</div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	return {};
}

export default connect(mapStateToProps)(About);