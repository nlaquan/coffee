/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { shape, func, bool } from 'prop-types';

function MenuItem({ isActive, onActive, children }) {
  return (
    <li
      className={`menu-item mb-3 ${isActive ? 'menu-item--active' : ''}`}
      onClick={onActive}
    >
      {children}
    </li>
  );
}

MenuItem.defaultProps = {
  isActive: undefined,
  onActive: undefined,
  children: undefined,
};

MenuItem.propTypes = {
  isActive: bool,
  onActive: func,
  children: shape({}),
};

export default MenuItem;
