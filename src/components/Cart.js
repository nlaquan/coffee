import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './CartItem';
import withModal from '../withModal';

class Cart extends Component {
  constructor() {
    super();

    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder() {
    const { cart } = this.props;
    console.log(cart); // eslint-disable-line
  }

  render() {
    const { cart, show } = this.props;
    const content = cart.map(item => (
      <Item
        key={`${item.id}${item.size}${item.quantity}`}
        item={item}
        show={show}
      />
    ));

    return (
      <div className="col-4">
        <div className="sticky box-shadow">
          <div className="order list-group-item mb-1">
            <button
              type="button"
              className="btn btn-block btn-orange"
              onClick={this.handleOrder}
            >
              Đặt hàng
            </button>
          </div>
          <ul className="list-group">
            {content}
          </ul>
          <div className="list-group-item d-flex justify-content-between">
            <span>Tổng cộng</span>
            <h5>132000&nbsp;đ</h5>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  show: PropTypes.func.isRequired,
};

export default withModal(Cart);
