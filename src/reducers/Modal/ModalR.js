import { OPEN_MODAL } from "../../actions/Modal/openModal";

const initialState = {
  isOpen: false,
  content: ""
};

const ModalR = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        content: action.payload.content
      };
    default:
      return state;
  }
};

export default ModalR;
