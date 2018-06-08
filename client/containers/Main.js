import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import BrandingAndIdentity from '../pages/BrandingAndIdentity';
import BrandingAndIdentityProject from '../pages/projects/BrandingAndIdentityProject';
import Contacts from '../pages/Contacts';
import Photography from '../pages/Photography';

class Main extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div id="site">
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/about' component={About}/>
					<Route exact path='/contacts' component={Contacts}/>
					<Route exact path='/branding-and-identity' component={BrandingAndIdentity} />
					<Route path='/branding-and-identity/:title' component={BrandingAndIdentityProject} />
					<Route path='/photography/:title' component={Photography}/>
				</Switch>
			</div>
		);
	}
}

export default Main;
