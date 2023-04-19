import { Fragment } from "react"
import ReactDom from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({ onClose, children }) => {
    return (
        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <Backdrop onClose={onClose}/>
                        <div className="modal">
                            <button type="close" onClick={onClose}>X</button>
                            <div className="content">{children}</div>
                        </div>
                    </Fragment>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )
}

export default Modal