import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const DeleteModal = ({ show, contactId, onCancel, onConfirm }) => {
    const { actions } = useContext(Context);

    //console.log('modale component show', show)

    return (
        <Modal show={show} onHide={actions.hideDelModal}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete this contact?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onConfirm(contactId)}>Yes</Button>
                <Button variant="primary" onClick={actions.hideDelModal} >No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;