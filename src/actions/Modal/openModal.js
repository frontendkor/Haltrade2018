export const OPEN_MODAL = "OPEN_MODAL";

// Avoid a jump when deleting / adding a scroll
// Избежать скачок при удалении / добавлении скрола
const optimizeWindow = isOpen => {
  let div = document.createElement("div");
  let body = document.body;
  let header = document.getElementsByTagName("header")[0];
  div.style.overflowY = "scroll";
  body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  body.removeChild(div);
  const noScroll = () => {
    body.style.overflow = "hidden";
    body.style.marginRight = `${scrollWidth}px`;
    header.style.cssText = `right: ${scrollWidth}px; width: calc(100% - ${scrollWidth}px)`;
  };
  const yesScroll = () => {
    body.style.overflow = "auto";
    body.style.marginRight = `0px`;
    header.style.cssText = `right: 0; width: 100%;`;
  };
  isOpen ? noScroll() : yesScroll();
};

const openModal = (isOpen, content) => {
  optimizeWindow(isOpen);

  return dispatch => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        isOpen: isOpen,
        content: content
      }
    });
  };
};

export default openModal;
