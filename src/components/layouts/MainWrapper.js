import React, { Component } from 'react';
import { includes, isEmpty } from 'lodash';
import CategoryList from './CategoryList';
import Cart from '../Cart';
import Main from '../Main';
import { categories } from '../../data';

class MainWrapper extends Component {
  constructor() {
    super();

    this.state = {
      cart: {},
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    // console.log(item); // eslint-disable-line
    const { cart } = this.state;
    const tempCart = Object.assign({}, cart);
    const key = `${item.id}${item.size}`;
    const keys = Object.keys(cart);
    if (!isEmpty(item)) {
      if (includes(keys, key)) {
        const quantity = tempCart[key].quantity + item.quantity;
        if (quantity === 0) {
          delete tempCart[key];
        } else {
          tempCart[key].quantity = quantity;
        }
      } else {
        tempCart[key] = item;
      }
      this.setState({ cart: tempCart });
    }
  }

  render() {
    const { cart } = this.state;
    const list = Object.values(cart);
    return (
      <div className="bg-white container-fluid">
        <div className="row justify-content-between">
          <CategoryList categories={categories} />
          <Main addToCart={this.addToCart} />
          <Cart cart={list} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default MainWrapper;
