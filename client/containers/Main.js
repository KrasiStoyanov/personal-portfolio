import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

import ArtAndIllustration from '../pages/ArtAndIllustration';
import ArtAndIllustrationProject from '../pages/projects/ArtAndIllustrationProject';
import BrandingAndIdentity from '../pages/BrandingAndIdentity';
import BrandingAndIdentityProject from '../pages/projects/BrandingAndIdentityProject';
import Gaming from '../pages/Gaming';
import GamingProject from '../pages/projects/GamingProject';
import GraphicDesign from '../pages/GraphicDesign';
import GraphicDesignProject from '../pages/projects/GraphicDesignProject';
import Literature from '../pages/Literature';
import LiteratureProject from '../pages/projects/LiteratureProject';
import Photography from '../pages/Photography';
import PhotographyProject from '../pages/projects/PhotographyProject';
import WebDesign from '../pages/WebDesign';
import WebDesignProject from '../pages/projects/WebDesignProject';

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
					<Route exact path='/art-and-illustration' component={ArtAndIllustration} />
					<Route path='/art-and-illustration/:title' component={ArtAndIllustrationProject} />
					<Route exact path='/branding-and-identity' component={BrandingAndIdentity} />
					<Route path='/branding-and-identity/:title' component={BrandingAndIdentityProject} />
					<Route exact path='/gaming' component={Gaming} />
					<Route path='/gaming/:title' component={GamingProject} />
					<Route exact path='/graphic-design' component={GraphicDesign} />
					<Route path='/graphic-design/:title' component={GraphicDesignProject} />
					<Route exact path='/literature' component={Literature}/>
					<Route path='/literature/:title' component={LiteratureProject}/>
					<Route exact path='/photography' component={Photography}/>
					<Route path='/photography/:title' component={PhotographyProject}/>
					<Route exact path='/web-design' component={WebDesign} />
					<Route path='/web-design/:title' component={WebDesignProject} />
				</Switch>
			</div>
		);
	}
}

export default Main;
