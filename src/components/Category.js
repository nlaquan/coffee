import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Category = ({
  id,
  name,
  items,
  addToCart,
  show,
  toggle,
}) => {
  const content = items.map(item => (
    <Item
      item={item} key={`${item.name}${item.id}`}
      addToCart={addToCart}
      toggle={toggle}
      show={show}
    />
  ));
  return (
    <div id={id} className="mb-3">
      <h6 className="mt-1">{name}</h6>
      <ul className="list-unstyled bg-white list-group">
        {content}
      </ul>
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addToCart: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Category;
