import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FormBackCall from "../../components/Forms/FormBackCall/FormBackCall";
import openModal from "../../actions/Modal/openModal";

class FormBackCallContainer extends Component {
  render() {
    const { openModal } = this.props;
    return <FormBackCall openModal={openModal} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

FormBackCallContainer.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(FormBackCallContainer);
