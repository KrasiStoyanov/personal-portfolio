import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WorksBarCategoryList extends Component {
	createCategoryItem () {
		return this.props.categories.map((category) => {
			return (
				<div key={category.dataFilter} className="col-6 col-lg-2 mb-5 mb-lg-0 text-center">
					<Link to={category.url} className="category d-inline-block">
						<div className="box d-flex align-items-center justify-content-center m-auto">
							<i className={"icon-" + category.icon}></i>
						</div>
						<p className="text-capitalize mt-2 mb-0">{category.title}</p>
					</Link>
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
		categories: state.portfolioCategories
	};
}

export default connect(mapStatesToProps)(WorksBarCategoryList);