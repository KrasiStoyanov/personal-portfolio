import React, { Component } from "react";
import { Link } from "react-router-dom";

class FollowingProject extends Component {
    render() {
        let project = this.props.project;

        let title = project.title;
        let projectTitle = project.projectTitle;
        let url = project.url;
        let coverImage = project.image;
        let followingProjectClassName = project.followingProjectClassName;
        let textAlignClassName = project.textAlignClassName ? project.textAlignClassName : "";
        let colMd = project.colMd;

        return (
            <div
             className={`col-12 col-md-${colMd} p-0 text-center ${followingProjectClassName} ${textAlignClassName}`}>
                <Link
                 to={url}
                 className="card d-flex flex-row work-link">
                    <div
                     className="cover-image img-fluid"
                     style={{ backgroundImage: `url(/public/${coverImage})` }}
                    />
                    <div className="overlay" />
                    <div className="wrapper d-flex flex-row align-self-center p-3">
                        <div className="content">
                            <h4 className="text d-inline-block font-weight-normal m-0">
                                <small className="d-block title text-capitalize text-white mt-0 mb-1">
                                    {title}
                                </small>
                                <span className="text-capitalize font-weight-bold text-white mb-0 position-relative">
                                    {projectTitle}
                                    <div className="arrow d-flex align-items-end">
                                        <svg
                                         className="next-arrow"
                                         viewBox="0 0 6.5 12">
                                            <line
                                             className="st0"
                                             x1="0"
                                             y1="-0.5"
                                             x2="6.5"
                                             y2="6.5"
                                            />
                                            <line
                                             className="st0"
                                             x1="0"
                                             y1="12.5"
                                             x2="6.5"
                                             y2="5.5"
                                            />
                                        </svg>
                                        <span className="line" />
                                    </div>
                                </span>
                            </h4>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default FollowingProject;
