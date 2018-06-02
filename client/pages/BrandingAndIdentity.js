import React, { Component } from 'react';
import { connect } from 'react-redux';

class BrandingAndIdentity extends Component {	
	render () {
		return (
		    <div>
		    	<h1>{this.props.project.title}</h1>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps) {
	let project = state.projects.filter(function (object) {
		let pageTitle = ownProps.match.params.title;
		let objectTitle = object.title.toLowerCase().split(' ').join('-');
		console.log(pageTitle, objectTitle)

		return  objectTitle === pageTitle;
	});

	return {
		project: project[0]
	};
}

export default connect(mapStateToProps)(BrandingAndIdentity);