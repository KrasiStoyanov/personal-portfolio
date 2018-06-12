import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		let header = this.props.projectHeader;
		let imageSrc = header.imageSrc;
		let title = header.title;

		return (
	    	<header className="project-header text-center d-flex flex-column align-items-center justify-content-center color-white" style={{backgroundImage: `url(/public/${imageSrc})`}}>
	    		<div className="overlay"></div>
	    		<div className="content">
	    			<h1 className="color-white mb-0">{title}</h1>
	    			<AnchorLink href="#project-content" id="scroll-down">
			    		<svg className="mouse" viewBox="0 0 30 46">
							<path className="shape" d="M15,1C7.3,1,1,7.3,1,15v16c0,7.7,6.3,14,14,14s14-6.3,14-14V15C29,7.3,22.7,1,15,1z"/>
							<line className="shape mouse-wheel" x1="15" y1="12" x2="15" y2="18"/>
						</svg>
					</AnchorLink>
	    		</div>
	    	</header>
		);
	}
}

export default Header;