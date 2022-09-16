import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Appoinment from './Appoinment';

const ShowVetInfo = ({ vet }) => {
    const { _id, name, speciality, email, experience, address, description, img } = vet;
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <MDBRow>
                    <MDBCol lg='6' md='6' className='mb-4'>
                        <img
                            src={img}
                            className='img-fluid rounded-circle'
                            alt=''
                        />
                    </MDBCol>
                </MDBRow>

                <Card.Body>
                    <Card.Title>Doctor Name: {name}</Card.Title>
                    <Card.Text>
                        Article: {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Speciality: {speciality}</ListGroup.Item>
                    <ListGroup.Item>Experience: {experience}</ListGroup.Item>
                    <ListGroup.Item>Location: {address}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Call</Card.Link>
                    <Card.Link href="#"><Appoinment></Appoinment></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowVetInfo;