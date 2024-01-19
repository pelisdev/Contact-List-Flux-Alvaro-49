import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ContactForm = () => {
    const { id } = useParams()
    const { store, actions } = useContext(Context);
    const contact = store.contacts.find((contact, idx) => idx === parseInt(id, 10)) || {};
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-center mt-5">{id ? "Edit Contact" : "Add Contact"}</h1>
            <Form>
                <Form.Group className="mb-3" controlId="full_name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" aria-describedby="fullnameHelp" placeholder="Enter Name" defaultValue={id ? contact.full_name : null} onKeyUp={actions.handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" aria-describedby="emailHelp" placeholder="Enter Email" defaultValue={id ? contact.email : null} onKeyUp={actions.handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" aria-describedby="phoneHelp" placeholder="Enter Phone" defaultValue={id ? contact.phone : null} onKeyUp={actions.handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" aria-describedby="addressHelp" placeholder="Enter Address" defaultValue={id ? contact.address : null} onKeyUp={actions.handleInputChange} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" onClick={() => actions.handleSave(id, navigate)}>Save</Button>
                </div>
                <Link to="/">
                    <span>or get back to contacts</span>
                </Link>
            </Form >
        </>

    )
}

export default ContactForm;