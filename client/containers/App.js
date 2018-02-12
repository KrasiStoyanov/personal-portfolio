import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { toggleWorksBar } from '../actions/index';

import Footer from '../components/Footer';
import NavigationBar from './NavigationBar';
import WorksBar from './WorksBar';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import BrandingAndIdentity from '../pages/BrandingAndIdentity';

class App extends Component {
	componentDidUpdate () {
		let isWorksBarToggled = this.props.isWorksBarToggled.toggleWorksBar;
		let body = document.getElementsByTagName('body')[0];
		let siteWrapper = document.getElementById('site-wrapper');
		let overlay = document.getElementById('works-bar-overlay');
		let worksBar = document.getElementById('works-bar');
		let worksBarOuterHeight = worksBar.offsetHeight;
		if (isWorksBarToggled) {
			body.className = 'works-bar-active';
			overlay.className = 'active';
			siteWrapper.style.top = worksBarOuterHeight + 'px';
		} else {
			body.className = '';
			overlay.className = '';
			siteWrapper.style.top = '0px';
		}
	}

	render() {
		return (
			<Router>
				<div>
					<WorksBar />
					<div id="site-wrapper" className="bg-light">
						<div id="works-bar-overlay" onClick={() => this.props.toggleWorksBar(this.props.toggle)}></div>
						<NavigationBar />
						<div id="site">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/portfolio/branding-and-identity/:id" component={BrandingAndIdentity} />
							</Switch>
						</div>
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

function mapStateToProps (state) {
	return {
		isWorksBarToggled: state.toggleWorksBar,
		toggle: state.toggleWorksBar
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({ toggleWorksBar: toggleWorksBar }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);