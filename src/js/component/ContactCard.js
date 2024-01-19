import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Deletemodal from './DeleteModal';
import { Card } from 'react-bootstrap';

const ContactCard = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
            {store.contacts.map((contact, idx) => (
                <Card key={idx}>
                    <div className="row">
                        <div className="col-md-4">
                            <Card.Img src="https://icon-library.com/images/member-icon-png/member-icon-png-0.jpg" className="img-fluid profile-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <FontAwesomeIcon className='btn-link mx-3 float-end' onClick={actions.showDelModal} icon={faTrashCan} />
                                <Deletemodal show={store.showDelModal} contactId={contact.id} onConfirm={() => actions.confirmDelete(contact.id)}>
                                </Deletemodal>
                                <Link className='btn-link' to={`/contact/${idx}`}>
                                    <FontAwesomeIcon className='mx-3 float-end' icon={faPencil} />
                                </Link>
                                <Card.Title>{contact.full_name}</Card.Title>
                                <FontAwesomeIcon className='icon me-3' icon={faLocationDot} /><Card.Text className='text mt-4 mb-2'>{contact.address}</Card.Text><br />
                                <FontAwesomeIcon className='icon me-3' icon={faPhone} /><Card.Text className='text mb-2'>{contact.phone}</Card.Text><br />
                                <FontAwesomeIcon className='icon me-3' icon={faEnvelope} /><Card.Text className='text mb-2'>{contact.email}</Card.Text><br />
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            ))}
        </>
    )
}

export default ContactCard;