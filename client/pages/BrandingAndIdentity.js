import React, { Component } from 'react';
import { connect } from 'react-redux';

class BrandingAndIdentity extends Component {	
	render () {
		return (
		    <div>
		    	<h1>{this.props.project.title}</h1>
		    	<h2>{this.props.match.params.id}</h2>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps) {
	let project = state.projects.filter(function (object) {
		let pageId = parseInt(ownProps.match.params.id);
		return  object.id === pageId;
	});

	return {
		project: project[0]
	};
}

export default connect(mapStateToProps)(BrandingAndIdentity);