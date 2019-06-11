import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Link from '../scroll';
import { Menu, MenuItem } from '../Menu';
import './index.css';

function CategoryList({ categories }) {
  return (
    <div className="col-3">
      <div className="sticky">
        <Menu>
          {
            categories.map(category => (
              <MenuItem key={category.name}>
                <Link
                  to={`#cate${category.id}`}
                >
                  {category.name}
                </Link>
              </MenuItem>
            ))
          }
        </Menu>
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  categories: arrayOf(shape({})).isRequired,
};

export default CategoryList;
