import React, { Component } from 'react';
import FollowingProject from './FollowingProject';

class SectionFollowingProject extends Component {
    render() {
        let projects = this.props.projects;
        let previousProject = projects.filter((p) => p.followingProjectClassName === 'previous-project');
        let nextProject = projects.filter((p) => p.followingProjectClassName === 'next-project');

        previousProject = previousProject.length > 0 ? <FollowingProject project={previousProject[0]} /> : '';
        nextProject = nextProject.length > 0 ? <FollowingProject project={nextProject[0]} /> : '';

        return(
            <section className="section following-project">
                <div className='container-fluid'>
                    <div className="row">
                        {previousProject}
                        {nextProject}
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionFollowingProject;