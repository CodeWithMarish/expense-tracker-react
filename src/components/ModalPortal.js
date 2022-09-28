import React from 'react'
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById("modal-root")
const ModalPortal = (ModalComp) => {
    return (props) => createPortal(<ModalComp {...props}/>, modalRoot)
}

export default ModalPortal