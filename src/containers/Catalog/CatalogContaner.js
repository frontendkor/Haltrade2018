import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Catalog from "../../pages/CatalogPage/Catalog/Catalog";
import getProducts from "../../actions/CatalogPage/getProducts";
import showCase from "../../actions/CatalogPage/showСase";
import recordProductDetails from "../../actions/CatalogPage/recordProductDetails";
import openModal from "../../actions/Modal/openModal";

class CatalogContaner extends Component {
  render() {
    const {
      dataProducts,
      dataShowCase,
      getProducts,
      showCase,
      recordProductDetails,
      openModal
    } = this.props;
    return (
      <Catalog
        data={dataProducts}
        getProducts={getProducts}
        showCase={showCase}
        dataShowCase={dataShowCase}
        recordProductDetails={recordProductDetails}
        openModal={openModal}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    dataProducts: store.CatalogProducts,
    dataShowCase: store.CatalogShowCase.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    showCase: data => dispatch(showCase(data)),
    recordProductDetails: data => dispatch(recordProductDetails(data)),
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

CatalogContaner.propTypes = {
  dataProducts: PropTypes.shape({
    initialRequest: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    wait: PropTypes.bool.isRequired
  }),
  dataShowCase: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  showCase: PropTypes.func.isRequired,
  recordProductDetails: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContaner);
