import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import "./ProductCart.sass";

class ProductCart extends Component {
  detail() {
    const { recordProductDetails, openModal } = this[1];
    const detailProduct = this[0];
    recordProductDetails(detailProduct);
    openModal(true, "DetailProduct");
  }
  renderCarts(data, recordProductDetails, openModal) {
    if (data) {
      return (
        <TransitionGroup className="row">
          {data.map(
            ({
              id,
              title,
              weight,
              weightPacking,
              storageTemperature,
              shelfLife,
              packaging
            }) => (
              <CSSTransition
                key={id}
                timeout={100}
                classNames="ProductCartItem"
              >
                <div className="ProductCartItem">
                  <div className="ProductImgContainer">
                    <img
                      src={`data/catalog/productsImg/${id}.jpg`}
                      alt="img"
                      className="ProductImg"
                    />
                  </div>
                  <p
                    onClick={this.detail.bind([
                      {
                        img: `data/catalog/productsImg/${id}.jpg`,
                        title,
                        weight,
                        weightPacking,
                        storageTemperature,
                        shelfLife,
                        packaging
                      },
                      { recordProductDetails, openModal }
                    ])}
                    className="ProductTitle"
                  >
                    {title}
                  </p>
                </div>
              </CSSTransition>
            )
          )}
        </TransitionGroup>
      );
    }
  }
  render() {
    const { data, recordProductDetails, openModal } = this.props;
    return (
      <React.Fragment>
        {this.renderCarts(data, recordProductDetails, openModal.bind(this))}
      </React.Fragment>
    );
  }
}

ProductCart.propTypes = {
  recordProductDetails: PropTypes.func.isRequired
};

export default ProductCart;
