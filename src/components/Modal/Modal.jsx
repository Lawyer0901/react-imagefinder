import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className="overlay">
        <div className="modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
