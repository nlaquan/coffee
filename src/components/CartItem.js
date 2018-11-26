import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
  }

  handleShow(item) {
    return () => {
      const { show } = this.props;
      show(item);
    };
  }

  render() {
    const { item } = this.props;
    const {
      id,
      name,
      originPrice,
      size,
      plusPrice,
      quantity,
    } = item;

    return (
      <li className="list-group-item">
        <div
          role="button"
          onClick={this.handleShow(item)}
          onKeyPress={() => { }}
          tabIndex={0}
          className="d-flex align-items-start"
        >
          <span className="badge badge-custom">{quantity}</span>
          <div className="flex-grow-1 d-flex justify-content-between align-items-start ml-3">
            <div>
              <h6 className="my-0">{`${name} ${id}`}</h6>
              <p className="text-muted description my-0">
                Size
                {size}
              </p>
            </div>
            <h6>
              {quantity * (originPrice + plusPrice)}
              &nbsp;đ
            </h6>
          </div>
        </div>
      </li>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    originPrice: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    plusPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  show: PropTypes.func.isRequired,
};

export default CartItem;
