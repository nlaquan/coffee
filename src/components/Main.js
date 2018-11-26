import React from 'react';
import { products } from '../data';
import Category from './Category';
import withModal from '../withModal';

const Main = (props) => {
  // console.log(props);  // eslint-disable-line
  const content = products.map(category => (
    <Category
      id={`#cate${category.id}`}
      name={category.name}
      items={category.items}
      key={category.name}
      {...props}
    />
  ));

  return (
    <div className="col-5 main">
      <input
        aria-label="search" type="text" className="form-control mb-3"
        placeholder="Tìm kiếm sản phẩm"
      />
      {content}
    </div>
  );
};

export default withModal(Main);
