import React from "react";
import FormModal from "../../Forms/FormModal/FormModal";
import FormModalThanks from "../../Forms/FormModalThanks/FormModalThanks";
import FormModalProductContainer from "../../../containers/FormsContainers/FormModalProductContainer";
import mod from "./ModalContent.module.sass";

const ModalContent = props => {
  const { content, openModal } = props;
  const onSubmit = values => {
    openModal(false, "");
    openModal(true, "Thanks");
  };
  const renderFormContent = () => {
    if (content === "FormBackCall" || content === "FormFreeShipping") {
      return (
        <div className={mod.ModalContent}>
          <FormModal onSubmit={onSubmit} openModal={openModal} />
        </div>
      );
    }
    if (content === "DetailProduct") {
      return (
        <div className={mod.ModalContent}>
          <FormModalProductContainer />
        </div>
      );
    }
    if (content === "Thanks") {
      return (
        <div className={mod.ModalContent}>
          <FormModalThanks openModal={openModal} />
        </div>
      );
    }
  };
  return <React.Fragment>{renderFormContent()}</React.Fragment>;
};

export default ModalContent;
