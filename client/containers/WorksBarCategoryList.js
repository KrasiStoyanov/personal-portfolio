import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class WorksBarCategoryList extends Component {
	createCategoryItem () {
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

	render() {
		return (
			<div className="w-100 d-flex flex-wrap">
				{this.createCategoryItem()}
			</div>
		);
	}
}

function mapStatesToProps (state) {
	return {
		categories: state.categories
	};
}

export default connect(mapStatesToProps)(WorksBarCategoryList);