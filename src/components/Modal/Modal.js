import * as ReactDOM from "react-dom";
import Transition from "react-transition-group/Transition";
import React, { Component } from "react";
import ModalContent from "./ModalContent/ModalContent";
import "./Modal.sass";

class Portal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const Modal = props => {
  const { openModal, isOpen, content } = props;
  const renderModal = () => {
    return (
      <Transition in={isOpen} timeout={10}>
        {state => {
          return (
            <Portal>
              <div className={`Modal Modal-${state}`}>
                <ModalContent content={content} openModal={openModal} />
              </div>
            </Portal>
          );
        }}
      </Transition>
    );
  };
  return <React.Fragment>{renderModal()}</React.Fragment>;
};

export default Modal;
