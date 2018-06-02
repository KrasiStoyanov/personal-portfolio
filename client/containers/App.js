import React, { Component } from 'react';

import Footer from '../components/Footer';
import NavigationBar from './NavigationBar';
import WorksBar from './WorksBar';
import Main from './Main';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isWorksBarHidden: true
		};
	}

	toggleWorksBarVisibility() {
		this.setState({
			isWorksBarHidden: !this.state.isWorksBarHidden
		});

		let isWorksBarHidden = !this.state.isWorksBarHidden;
		let body = document.getElementsByTagName('body')[0];
		let siteWrapper = document.getElementById('site-wrapper');
		let overlay = document.getElementById('works-bar-overlay');
		let worksBar = document.getElementById('works-bar');
		let worksBarOuterHeight = worksBar.offsetHeight;
		if (isWorksBarHidden) {
			body.className = '';
			overlay.className = '';
			siteWrapper.style.top = '0px';
		} else {
			body.className = 'works-bar-active';
			overlay.className = 'active';
			siteWrapper.style.top = worksBarOuterHeight + 'px';
		}
	}

	render() {
		return (
			<div>
				<WorksBar toggleWorksBarVisibility={this.toggleWorksBarVisibility.bind(this)} />
				<div id="site-wrapper" className="bg-light">
					<div id="works-bar-overlay" onClick={() => this.toggleWorksBarVisibility()}></div>
					<NavigationBar toggleWorksBarVisibility={this.toggleWorksBarVisibility.bind(this)} />
					<Main />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;