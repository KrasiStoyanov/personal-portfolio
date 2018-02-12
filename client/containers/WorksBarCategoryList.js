import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorksBarCategoryList extends Component {
	render() {
		return this.props.categories.map((category) => {
			return (
				<div key={category.dataFilter} className="col-6 col-lg-2 mb-5 mb-lg-0 text-center">
					<a href={category.url} className="category d-inline-block">
						<div className="box d-flex align-items-center justify-content-center m-auto">
							<i className={"icon-" + category.icon}></i>
						</div>
						<p className="text-capitalize mt-2 mb-0">{category.title}</p>
					</a>
				</div>
			);
		});
	}
}

function mapStateToProps (state) {
	return {
		categories: state.categories
	};
}

export default connect(mapStateToProps)(WorksBarCategoryList);