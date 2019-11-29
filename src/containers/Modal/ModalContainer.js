import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../../components/Modal/Modal";
import openModal from "../../actions/Modal/openModal";

class ModalContainer extends Component {
  render() {
    const { isOpen, content, openModal } = this.props;
    return <Modal isOpen={isOpen} content={content} openModal={openModal} />;
  }
}

const mapStateToProps = store => {
  return {
    isOpen: store.Modal.isOpen,
    content: store.Modal.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, content) => dispatch(openModal(isOpen, content))
  };
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
