import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../actions/index';

import SectionDescription from '../components/project/SectionDescription';
import SectionQuote from '../components/project/SectionQuote';
import SectionApproach from '../components/project/SectionApproach';
import SectionColors from '../components/project/SectionColors';

class BrandingAndIdentity extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-light'));
	}

	render () {
		let project = this.props.project;

		let overview = project.overview ? <SectionDescription descriptionContent={project.overview} /> : '';
		let quote = project.quote ? <SectionQuote logo={project.logo} quoteContent={project.quote} /> : '';
		let purpose = project.purpose ? <SectionDescription descriptionContent={project.purpose} /> : '';
		let approach = project.approach ? <SectionApproach approachContent={project.approach} /> : '';
		let colors = project.colors ? <SectionColors logo={project.logo} colorsContent={project.colors} /> : '';

		return (
		    <div id="project">
		    	<header className="project-header text-center d-flex flex-column align-items-center justify-content-center color-white" style={{backgroundImage: `url(/public/${project.imageSrc})`}}>
		    		<div className="overlay"></div>
		    		<div className="content">
		    			<h1 className="color-white mb-0">{project.title}</h1>
		    			<a id="scroll-down">
				    		<svg className="mouse" viewBox="0 0 30 46">
								<path className="shape" d="M15,1C7.3,1,1,7.3,1,15v16c0,7.7,6.3,14,14,14s14-6.3,14-14V15C29,7.3,22.7,1,15,1z"/>
								<line className="shape mouse-wheel" x1="15" y1="12" x2="15" y2="18"/>
							</svg>
						</a>
		    		</div>
		    	</header>
		    	<div className="project-content">
		    		{overview}
		    		{quote}
		    		{purpose}
		    		{approach}
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	// console.log(state, ownProps)
	let pageTitle = ownProps.match.params.title;
	let project = state.brandingAndIdentity.filter(function (object) {
		let objectTitle = object.title.toLowerCase().split(' ').join('-');

		return  objectTitle === pageTitle;
	});

	return {
		project: project[0]
	};
}

export default connect(mapStateToProps)(BrandingAndIdentity);