import React, { Component } from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
import { changeNavigationBarColorSchemeClass } from '../actions/index';

class Contacts extends Component {
	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-dark'));
	}

	render() {
		return (
			<div className="pt-11">
				<div id="contacts" className="container pr-sm-0 pl-sm-0 pt-12 pb-12">
		    		<div className="row">
		    			<div className="col-12 col-md-8 col-lg-6">
		    				<h2 className="color-black mb-3 text-capitalize">Let's get in touch</h2>
		    				<p className="mb-0">Doesn't matter if you just want to chat or request a design project, feel free to contact me either on social media or via my contact details.</p>
		    			</div>
		    		</div>
		    		<div className="row pt-11">
		    			<div className="col-12 col-lg-4">
		    				<small className="title text-uppercase text-primary mb-1">Email</small>
		    				<p><a href="mailto:krasimir641@gmail.com">krasimir641@gmail.com</a></p>
		    			</div>
		    			<div className="col-12 col-lg-4">
		    				<small className="title text-uppercase text-primary mb-1">Mobile</small>
		    				<p>+31 6 15 95 15 69</p>
		    			</div>
		    			<div className="col-12 col-lg-4">
		    				<small className="title text-uppercase text-primary mb-1">Location</small>
		    				<p>Groningen, Netherlands</p>
		    			</div>
		    		</div>
		    	</div>
	    		<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38220.56294415943!2d6.530674063145225!3d53.22169991790648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c83286b462cca7%3A0xcb4b5086f9a6c8dc!2sGroningen!5e0!3m2!1sen!2snl!4v1529097868782" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen position="relative" />
			</div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	return {};
}

export default connect(mapStateToProps)(Contacts);