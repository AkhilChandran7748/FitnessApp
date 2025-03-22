import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React from "react";
const ConfirmModal = ({ visible, onClose, content, cancelText = 'Cancel', confirmText = 'Continue', onConfirm, header }) => {
    const footerContent = (
        <div>
            <Button  label={cancelText} className="margin-r-10"  onClick={onClose}  />
            <Button label={confirmText}  onClick={onConfirm} autoFocus severity="danger" />
        </div>
    );
    return (<>
        <Dialog header={header} visible={visible} onHide={onClose}
            footer={footerContent}>
            <p className="m-0">
                {content}
            </p>
        </Dialog>
    </>)
}
export default ConfirmModal