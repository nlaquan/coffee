import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  CustomInput,
  Label,
} from 'reactstrap';

const priceMap = { M: 0, L: 7000 };

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        quantity: 1,
        size: 'M',
        plusPrice: 0,
        ...props.item,
      },
    };

    this.initQuantity = props.item.quantity || 0;

    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleReduceQuantity = this.handleReduceQuantity.bind(this);
    this.handleChooseSize = this.handleChooseSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddQuantity() {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        quantity: item.quantity + 1,
      },
    });
  }

  handleReduceQuantity() {
    const { item } = this.state;
    if (item.quantity > 0) {
      this.setState({
        item: {
          ...item,
          quantity: item.quantity - 1,
        },
      });
    }
  }

  handleChooseSize(e) {
    const { id } = e.target;
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        size: id,
        plusPrice: priceMap[id],
      },
    });
  }

  handleAddToCart() {
    const { item } = this.state;
    const { addToCart } = this.props;
    let tempItem = Object.assign({}, item);
    if (item.quantity < this.initQuantity) {
      tempItem.quantity -= this.initQuantity;
    } else if (item.quantity === this.initQuantity) {
      tempItem = {};
    }
    addToCart(tempItem);
  }

  render() {
    const { toggle, isOpen } = this.props;
    const { item } = this.state;
    const price = item.quantity * (item.originPrice + item.plusPrice);
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle} />
          <ModalBody>
            <div className="d-flex">
              <div className="product-img">
                <img src={item.img} alt="product-img" />
              </div>
              <div className="ml-2">
                <h6 className="my-0 font-weight-bold">{`${item.name} ${item.id}`}</h6>
                <p className="text-muted description my-0">
                  {item.description}
                </p>
              </div>
            </div>
            <hr />
            <div className="small-90">
              <Label for="size">Size: </Label>
              <div>
                <CustomInput
                  type="radio" id="M"
                  label="Size nhỏ (475ml)" name="customRadio"
                  onChange={this.handleChooseSize}
                />
                <CustomInput
                  type="radio" id="L"
                  label="Size vừa (600ml) (+7000 đ)" name="customRadio"
                  onChange={this.handleChooseSize}
                />
              </div>
              <hr />
              <Label>Topping: (chọn tối đa 2 loại)</Label>
              <div>
                <CustomInput
                  type="checkbox" id="tranChauTrang"
                  label="Trân châu trắng"
                />
                <CustomInput
                  type="checkbox" id="tranChauDen"
                  label="Trân châu đen"
                />
                <CustomInput
                  type="checkbox" id="ahi"
                  label="Ahi"
                />
              </div>
              <hr />
              <input className="form-control" placeholder="Thêm ghi chú" />
              <hr />
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={this.handleReduceQuantity}
                  >
                    <i className="fas fa-minus minus" />
                  </button>
                  <div className="mx-3">{item.quantity}</div>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={this.handleAddQuantity}
                  >
                    <i className="fas fa-plus add" />
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-orange"
                  onClick={this.handleAddToCart}
                >
                  THÊM VÀO GIỎ &nbsp;&nbsp;&nbsp;
                  <span>
                    {price}
                    &nbsp;đ
                  </span>
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addToCart: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    quantity: PropTypes.number,
  }).isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ItemModal;
