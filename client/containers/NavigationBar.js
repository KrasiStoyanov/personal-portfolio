import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { toggleWorksBar } from '../actions/index';

class NavigationBarBasedOnRoute extends Component {
	render() {
		const PORTFOLIO_PATHNAME = '/portfolio';
		const { match, location, history } = this.props;
		const isInPortfolioSection = location.pathname.includes('/portfolio/');
		console.log(isInPortfolioSection)

		return (
		    <nav id="navigation-bar" className={`navbar ${isInPortfolioSection ? 'sticky-top' : ''} navbar-expand-sm navbar-light bg-light`}>
				<div className="container pl-3 pr-3 pl-md-0 pr-md-0">
					<a className="navbar-brand" href="#">
						<img src="../../public/images/logos/black-and-white.svg" alt="Black & White Logo"/>
					</a>
					<button className="navbar-toggler align-self-end" type="button" data-toggle="collapse" data-target="#navigation-bar-content" aria-controls="navigation-bar-content" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-end" id="navigation-bar-content">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
							</li>
							<li className="nav-item ml-6">
								<NavLink to="/works" activeClassName="active" className="nav-link">Works</NavLink>
							</li>
							<li className="nav-item ml-6">
								<NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
							</li>
							<li className="nav-item ml-6">
								<NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
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

NavigationBarBasedOnRoute.propTypes = {
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
}

function mapStateToProps (state) {
	return {
		toggle: state.toggleWorksBar
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({ toggleWorksBar: toggleWorksBar }, dispatch);
}

const NavigationBar = withRouter(NavigationBarBasedOnRoute);

export default connect(mapStateToProps, matchDispatchToProps, null, {
	pure: false
})(NavigationBar);