import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import BrandingAndIdentity from '../pages/BrandingAndIdentity';
import Contacts from '../pages/Contacts';
import Photography from '../pages/Photography';

class Main extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		let changeNavigationBarColor = this.props.changeNavigationBarColor;

		return (
			<div id="site">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/contacts' component={Contacts}/>
					<Route path='/portfolio/branding-and-identity/:title' component={BrandingAndIdentity} />
					<Route path='/portfolio/photography/:title' component={Photography}/>
				</Switch>
			</div>
		);
	}
}

export default Main;
