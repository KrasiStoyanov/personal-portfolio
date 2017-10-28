import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleWorksBar } from '../actions/index';

import WorksBarCategoryList from '../containers/WorksBarCategoryList';

class WorksBar extends Component {
	render() {
		return(
		    <div id="works-bar">
				<div className="content">
					<div className="container flex-column">
						<div className="row pb-12">
							<div className="w-100 pt-5 pb-5">
								<button type="button" className="close" onClick={() => this.props.toggleWorksBar(this.props.toggle)}><i className="icon-x"></i></button>
							</div>
							<WorksBarCategoryList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		toggle: state.toggleWorksBar
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({ toggleWorksBar: toggleWorksBar }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WorksBar);