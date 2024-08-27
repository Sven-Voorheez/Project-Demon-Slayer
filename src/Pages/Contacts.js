import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import './Contacts.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className='Contacts-div'>
                <Container className="contact-form-container">
                    <h1 className='text-center'>Contact us</h1>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Your message here" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}