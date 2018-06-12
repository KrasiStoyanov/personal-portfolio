import React, { Component } from 'react';
import WorksBarCategoryList from '../containers/WorksBarCategoryList';

class WorksBar extends Component {
	render() {
		return(
		    <div id="works-bar">
				<div className="content">
					<div className="container container-xs container-sm container-md flex-column">
						<div className="row pb-12">
							<div className="w-100 pt-5 pb-5">
								<button type="button" className="close" onClick={() => this.props.toggleWorksBarVisibility()}><i className="icon-x"></i></button>
							</div>
							<WorksBarCategoryList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WorksBar;