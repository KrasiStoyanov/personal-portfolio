import React from 'react';

const WorkCard = () => (
    <a href={{this.url}} className="h-100 card d-flex flex-row work-link" onclick="onWorkClick({{json this}})">
		<div className="cover-image img-fluid" style="background-image: url('{{this.imageSrc}}');"></div>
		<div className="overlay"></div>
		<div className="wrapper d-flex flex-row align-self-end pr-3 pb-3 pl-3">
			<div className="content color-white">
				<small className="date">{{this.date}}</small>
				<h3 className="title mb-0 text-capitalize">{{this.title}}</h3>
			</div>
			<div className="arrow d-flex align-items-end">
				<svg className="next-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.5 12">
					<line className="st0" x1="0" y1="-0.5" x2="6.5" y2="6.5"/>
					<line className="st0" x1="0" y1="12.5" x2="6.5" y2="5.5"/>
				</svg>
				<span className="line"></span>
			</div>
		</div>
	</a>
);

export default WorkCard;