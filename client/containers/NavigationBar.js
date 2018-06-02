import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveNavLink from '../components/ActiveNavLink';

class NavigationBar extends Component {
	toggleWorksBarVisibility(e) {
		e.preventDefault();

		this.props.toggleWorksBarVisibility();
	}

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
							{this.props.navigationLinks.map((link, index) => {
								return (
									<ActiveNavLink key={index} to={link.url} index={index}>{link.title}</ActiveNavLink>
								);
							})}
							<li className="nav-item ml-6">
								<a id="works-bar-trigger" className="nav-link icon" href="#" onClick={this.toggleWorksBarVisibility.bind(this)}><i className="icon-grid"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStatesToProps (state) {
	return {
		navigationLinks: state.navigationLinks
	};
}

export default connect(mapStatesToProps)(NavigationBar);