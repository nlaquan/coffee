import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

class Menu extends Component {
  render() {
    const { categories } = this.props;
    const menu = categories.map((category) => {
      return (
        <li className="mb-3" key={category.name}>
          <Link
            activeClass="active"
            to={`#cate${category.id}`}
            spy
            smooth
            offset={-50}
            isDynamic
            onSetInactive={this.handleSetInactive}
          >
            {category.name}
          </Link>
        </li>);
    });

    return (
      <div className="col-3">
        <div className="sticky">
          <ul className="list-unstyled bg-white box-shadow menu p-4">
            {menu}
          </ul>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Menu;
