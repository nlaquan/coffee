import React, { useState } from 'react';
import { arrayOf, element } from 'prop-types';
import MenuItem from './MenuItem';
import './index.css';

function Menu({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onActive = index => () => setActiveIndex(index);

  const _children = React.Children.map(children, (child, index) => {
    if (child.type === MenuItem) {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onActive: onActive(index),
      });
    }
    return child;
  });

  return (
    <ul className="list-unstyled bg-white box-shadow menu p-4">
      {_children}
    </ul>
  );
}

Menu.propTypes = {
  children: arrayOf(element).isRequired,
};

export default Menu;
