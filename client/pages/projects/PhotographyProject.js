import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNavigationBarColorSchemeClass } from '../../actions/index';

import Header from '../../components/project/Header';
import SectionDescription from '../../components/project/SectionDescription';
import SectionQuote from '../../components/project/SectionQuote';
import SectionApproach from '../../components/project/SectionApproach';
import SectionColors from '../../components/project/SectionColors';
import SectionFollowingProject from '../../components/project/SectionFollowingProject';
import SectionImageSwiper from '../../components/project/SectionImageSwiper';

class PhotographyProject extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(changeNavigationBarColorSchemeClass('navbar-light'));
	}

	render () {
		let project = this.props.project;
		let followingProjects = this.props.followingProjects;
		let projectHeader = {
			imageSrc: project.imageSrc,
			title: project.title
		};

		let overview = project.overview ? <SectionDescription descriptionContent={project.overview} /> : '';
		let followingProjectsSection = followingProjects.length > 0 ? <SectionFollowingProject projects={followingProjects} /> : '';

		return (
		    <div id="project">
		    	<Header projectHeader={projectHeader} />
		    	<div id="project-content" className="project-content">
		    		{overview}
		    		{followingProjectsSection}
		    	</div>
		    </div>
		);
	}
}

function mapStateToProps (state, ownProps, ...args) {
	let projects = state.photography;
	let projectsLength = projects.length;

	let pageTitle = ownProps.match.params.title;
	let currentProject = projects.filter((p) => {
		let currentpageTitle = p.title.toLowerCase().split(' ').join('-');

		return currentpageTitle === pageTitle;
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

export default connect(mapStateToProps)(PhotographyProject);