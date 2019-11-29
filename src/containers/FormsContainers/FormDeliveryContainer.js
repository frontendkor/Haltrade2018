import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FormDelivery from "../../components/Forms/FormDelivery/FormDelivery";
import openModal from "../../actions/Modal/openModal";

class FormDeliveryContainer extends Component {
  onSubmit = values => {
    const { openModal } = this.props;
    window.alert(JSON.stringify(values));
    openModal(true, "Thanks");
  };
  getInitialValues() {
    return {
      range: "6500"
    };
  }
  render() {
    return (
      <FormDelivery
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

const mapStateToProps = store => {
  return {
    form: store.form.DeliveryForm
  };
};

FormDeliveryContainer.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDeliveryContainer);
