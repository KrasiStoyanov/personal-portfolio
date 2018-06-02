import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ActiveNavLink extends Component {
    render() {
        let isActive = this.context.router.route.location.pathname === this.props.to;
        let isNotFirst = this.props.index !== 0;

        let marginClass = isNotFirst ? 'ml-6' : '';
        let activeClass = isActive ? 'active' : '';

        return(
            <li className={`nav-item ${activeClass} ${marginClass}`}>
                <Link className="nav-link" to={this.props.to}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

ActiveNavLink.contextTypes = {
    router: PropTypes.object
};

export default ActiveNavLink;