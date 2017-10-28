import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleWorksBar } from '../actions/index';

class NavigationBar extends Component {
	render() {
		return (
		    <nav id="navigation-bar" className="navbar navbar-expand-sm navbar-light bg-light">
				<div className="container pl-3 pr-3 pl-md-0 pr-md-0">
					<a className="navbar-brand" href="#">
						<img src="../../public/images/logos/black-and-white.svg" alt="Black & White Logo"/>
					</a>
					<button className="navbar-toggler align-self-end" type="button" data-toggle="collapse" data-target="#navigation-bar-content" aria-controls="navigation-bar-content" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-end" id="navigation-bar-content">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item ml-6">
								<a className="nav-link" href="#">Works</a>
							</li>
							<li className="nav-item ml-6">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item ml-6">
								<a className="nav-link" href="#">Contact</a>
							</li>
							<li className="nav-item ml-6">
								<a id="works-bar-trigger" className="nav-link icon" href="#" onClick={() => this.props.toggleWorksBar(this.props.toggle)}><i className="icon-grid"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps (state) {
	return {
		toggle: state.toggleWorksBar
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({ toggleWorksBar: toggleWorksBar }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NavigationBar);