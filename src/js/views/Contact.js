import React, { useContext } from "react";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Contact = () => {

	return (
		<>
			<Link className="btn-link" to="/contact">
				<div className="d-grid gap-2 d-md-flex justify-content-md-end">
					<Button variant="success" className="my-3">Add new contact</Button>
				</div>
			</Link>
			<ContactCard />
		</>
	)
}

export default Contact;