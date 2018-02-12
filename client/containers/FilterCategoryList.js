import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterCategoryList extends Component {
	render() {
		return this.props.categories.map((category) => {
			return (
				<li key={category.dataFilter} className="d-inline-block mr-2" data-filter={category.dataFilter}>
					<a href="#" className="nav-link cursor-pointer pt-0 text-capitalize">{category.title}</a>
				</li>
			);
		});
	}
}

function mapStateToProps (state) {
	return {
		categories: state.categories
	};
}

export default connect(mapStateToProps)(FilterCategoryList);