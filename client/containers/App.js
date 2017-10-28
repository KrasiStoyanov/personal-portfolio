import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { toggleWorksBar } from '../actions/index';

import Footer from '../components/Footer';
import NavigationBar from './NavigationBar';
import WorksBar from './WorksBar';

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
			<div>
				<WorksBar />
				<div id="site-wrapper" className="bg-light">
					<div id="works-bar-overlay" onClick={() => this.props.toggleWorksBar(this.props.toggle)}></div>
					<NavigationBar />
					<div id="site">
						{this.props.children}
					</div>
					<Footer />
				</div>
			</div>
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