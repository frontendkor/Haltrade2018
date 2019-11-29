import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FormModalProduct from "../../components/Forms/FormModalProduct/FormModalProduct";
import openModal from "../../actions/Modal/openModal";

class FormModalProductContainer extends Component {
  onSubmit = values => {
    const { openModal } = this.props;
    window.alert(JSON.stringify(values));
    openModal(true, "Thanks");
  };
  render() {
    const { productDetails, openModal } = this.props;
    return (
      <FormModalProduct
        onSubmit={this.onSubmit}
        data={productDetails}
        openModal={openModal}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

const mapStateToProps = store => {
  return {
    productDetails: store.productDetails
  };
};

FormModalProductContainer.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormModalProductContainer);
