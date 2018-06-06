import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActiveNavLink from '../components/ActiveNavLink';

class NavigationBar extends Component {
	constructor (props) {
		super(props);
	}

	toggleWorksBarVisibility(e) {
		e.preventDefault();

		this.props.toggleWorksBarVisibility();
	}

	render() {
		return (
		    <nav id="navigation-bar" className={`navbar ${this.props.navigationBarColorSchemeClass} navbar-expand-sm bg-transparent`}>
				<div className="container pr-2 pl-2 pl-md-0 pr-md-0">
					<Link className="navbar-brand" to="/">
						<svg viewBox="0 0 35.3 50">
							<g id="logo">
								<path d="M0,10.9v28.2C0,46.2,5.7,50,11.1,50h1.4V0h-1.4C5.7,0,0,3.8,0,10.9z M9.7,47c-3.6-0.6-6.8-3.3-6.8-7.9V10.9
									c0-4.7,3.2-7.4,6.8-7.9V47z"/>
								<path d="M25.6,23.1c1-1,2-2.2,3.1-3.4l0.7-0.8c3.6-3.9,5.9-6.6,5.9-8.8V8.5c0-5.1-3.3-7.8-3.4-7.9L31,0
									c0,0-3.2,3.1-4.5,4.4c-3.7,3.5-8.4,7.8-8.4,11.4v5.7l2.9-2.9v-2.8c0-2.4,4.7-6.7,7.5-9.3c1.1-1,2-1.8,2.6-2.5
									c0.7,0.9,1.4,2.4,1.4,4.5v1.6c0,1.3-3.3,4.9-5.1,6.9l-0.8,0.8c-1,1.1-2,2-3,3c-2.9,2.9-5.5,5.3-5.5,8.8v4.6c0,5,10,13.5,12,15.1
									L31,50l0.9-0.8c0.1-0.1,3.4-2.9,3.4-7.8c0-1.2,0-3.7-1.4-5.6c-1.4-1.9-3.4-3.9-5.4-5.8c-0.7-0.7-1.4-1.4-2.1-2.1l-2,2
									c0.7,0.7,1.4,1.4,2.2,2.1c1.9,1.8,3.8,3.7,5,5.4c0.8,1.2,0.8,3,0.8,4c0,2.2-0.9,3.8-1.6,4.8c-4.4-3.8-9.9-9.5-9.9-12v-4.6
									C21,27.4,23,25.6,25.6,23.1z"/>
							</g>
						</svg>
					</Link>
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
								<a id="works-bar-trigger" className='nav-link icon' href="#" onClick={this.toggleWorksBarVisibility.bind(this)}><i className="icon-grid"></i></a>
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
		navigationLinks: state.navigationLinks,
		navigationBarColorSchemeClass: state.navigationBarColorSchemeClass.className
	};
}

export default connect(mapStatesToProps)(NavigationBar);