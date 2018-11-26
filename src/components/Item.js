import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
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
      img, description, name, originPrice, id,
    } = item;
    return (
      <React.Fragment>
        <li className="list-group-item d-flex">
          <div
            className="d-flex"
            role="button"
            tabIndex={0}
            onClick={this.handleShow(item)}
            onKeyPress={() => { }}
          >
            <div className="product-img">
              <img src={img} alt="product-img" />
            </div>
            <div className="ml-2">
              <h6 className="my-0 font-weight-bold">{`${name} ${id}`}</h6>
              <p className="text-muted description my-0">
                {description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="my-0">
                  {originPrice}
                  &nbsp;đ
                </p>
                <i className="fas fa-plus add" />
              </div>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({}).isRequired,
  show: PropTypes.func.isRequired,
};

export default Item;
