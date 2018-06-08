import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../../actions/index';

import SectionDescription from '../../components/project/SectionDescription';
import SectionQuote from '../../components/project/SectionQuote';
import SectionApproach from '../../components/project/SectionApproach';
import SectionColors from '../../components/project/SectionColors';
import SectionFollowingProject from '../../components/project/SectionFollowingProject';
import SectionImageSwiper from '../../components/project/SectionImageSwiper';

class BrandingAndIdentityProject extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-light'));
	}

	render () {
		let project = this.props.project;
		let followingProjects = this.props.followingProjects;

		let overview = project.overview ? <SectionDescription descriptionContent={project.overview} /> : '';
		let quote = project.quote ? <SectionQuote logo={project.logo} quoteContent={project.quote} /> : '';
		let purpose = project.purpose ? <SectionDescription descriptionContent={project.purpose} /> : '';
		let approach = project.approach ? <SectionApproach approachContent={project.approach} /> : '';
		let colors = project.colors ? <SectionColors logo={project.logo} colorsContent={project.colors} /> : '';
		let images = project.images ? <SectionImageSwiper images={project.images} /> : '';
		let followingProjectsSection = followingProjects.length > 0 ? <SectionFollowingProject projects={followingProjects} /> : '';

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
		    		{images}
		    		{followingProjectsSection}
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	// console.log(state, ownProps)
	let projects = state.brandingAndIdentity;
	let projectsLength = projects.length;

	let pagetitle = ownProps.match.params.title;
	let currentProject = projects.filter((p) => {
		let currentPageTitle = p.title.toLowerCase().split(' ').join('-');

		return currentPageTitle === pagetitle;
	});

	currentProject = currentProject[0];

	let followingProjects = [];
	if (projectsLength > 1) {
		if (currentProject.id + 1 < projectsLength) {
			let followingProject = {};
			let nextProject = projects.filter((p) => p.id === currentProject.id + 1);

			nextProject = nextProject[0];
			followingProject = {
				title: 'Next project',
				projectTitle: nextProject.title,
				url: nextProject.url,
				image: nextProject.imageSrc,
				followingProjectClassName: 'next-project',
				colMd: 6
			};

			followingProjects.push(followingProject);
		}

		if (currentProject.id - 1 > -1) {
			let followingProject = {};
			let previousProject = projects.filter((p) => p.id === currentProject.id - 1);

			previousProject = previousProject[0];
			followingProject = {
				title: 'Previous project',
				projectTitle: previousProject.title,
				url: previousProject.url,
				image: previousProject.imageSrc,
				followingProjectClassName: 'previous-project',
				colMd: 6
			};

			followingProjects.push(followingProject);
		}
	}

	if (followingProjects.length === 1) {
		followingProjects[0].textAlignClassName = 'text-center';
		followingProjects[0].colMd = 12;
	}

	return {
		project: currentProject,
		followingProjects: followingProjects
	};
}

export default connect(mapStateToProps)(BrandingAndIdentityProject);