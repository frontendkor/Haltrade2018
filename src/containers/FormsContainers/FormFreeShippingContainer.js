import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FormFreeShipping from "../../components/Forms/FormFreeShipping/FormFreeShipping";
import openModal from "../../actions/Modal/openModal";

class FormFreeShippingContainer extends Component {
  render() {
    const { openModal } = this.props;
    return <FormFreeShipping openModal={openModal} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

FormFreeShippingContainer.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(FormFreeShippingContainer);
