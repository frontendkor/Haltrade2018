import React, { Component } from "react";
import Preloader from "../../../components/Preloader/Preloader";
import Nav from "./Nav/Nav";
import ProductCart from "./ProductCart/ProductCart";
import mod from "./Catalog.module.sass";

class Catalog extends Component {
  actionShowCase(data, mark) {
    const { showCase } = this.props;
    let newData = data.filter(item => {
      return item.hasOwnProperty(mark);
    });
    showCase(newData);
  }
  componentDidMount() {
    const { initialRequest } = this.props.data;
    const { getProducts } = this.props;
    if (initialRequest === true) {
      getProducts();
    }
  }
  componentDidUpdate(nextProps) {
    const { products } = this.props.data;
    if (nextProps.data.products !== products) {
      this.actionShowCase(products, "showCase");
    }
  }
  render() {
    const { wait, products } = this.props.data;
    const {
      dataShowCase,
      showCase,
      recordProductDetails,
      openModal
    } = this.props;
    if (products.length) {
      return (
        <section className={mod.Catalog}>
          <div className="container">
            <div className="row">
              <Nav products={products} showCase={showCase} />
            </div>
            <ProductCart
              data={dataShowCase}
              recordProductDetails={recordProductDetails}
              openModal={openModal}
            />
          </div>
        </section>
      );
    }
    if (wait) {
      return (
        <div className="container">
          <Preloader />
        </div>
      );
    }
    return null;
  }
}

export default Catalog;
