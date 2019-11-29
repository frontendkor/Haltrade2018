import React, { Component } from "react";
import { connect } from "react-redux";

import FormOrderSamples from "../../components/Forms/FormOrderSamples/FormOrderSamples";
import openModal from "../../actions/Modal/openModal";

class FormOrderSamplesContainer extends Component {
  onSubmit = values => {
    window.alert(JSON.stringify(values));
  };
  getInitialValues() {
    return {
      product: "Тушки"
    };
  }
  render() {
    return (
      <FormOrderSamples
        onSubmit={this.onSubmit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormOrderSamplesContainer);
