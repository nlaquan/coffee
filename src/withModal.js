import React, { Component } from 'react';
import ItemModal from './components/ItemModal';

// const price = { M: 0, L: 7000 };
// const item = {
//   id: 35,
//   img: 'https://via.placeholder.com/80x80',
//   name: 'Matcha macchiato',
//   description: `Matcha macchiato có vị hơi nhẫn đắng của bột matcha nhưng có
//     hậu vị ngọt, bùi, kết hợp cùng với phô mai thơm ngậy`,
//   originPrice: 45000,
//   quantity: 1
// };

const withModal = (InjectedComponent) => {
  return class withModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        item: null,
      };

      this.toggle = this.toggle.bind(this);
      this.show = this.show.bind(this);
      this.addToCart = this.addToCart.bind(this);
    }

    show(item) {
      const { modal } = this.state;
      this.setState({
        modal: !modal,
        item: {
          ...item,
        },
      });
    }

    toggle() {
      const { modal } = this.state;
      this.setState({
        modal: !modal,
        item: null,
      });
    }

    addToCart(item) {
      const { addToCart } = this.props;
      addToCart(item);
      this.toggle();
    }

    render() {
      const { modal, item } = this.state;
      // console.log(this.props); // eslint-disable-line

      return (
        <React.Fragment>
          <InjectedComponent
            toggle={this.toggle}
            show={this.show}
            {...this.props}
          />
          {
            modal
            && (
            <ItemModal
              isOpen={modal} item={item}
              toggle={this.toggle} addToCart={this.addToCart}
            />
            )
          }
        </React.Fragment>
      );
    }
  };
};

export default withModal;
