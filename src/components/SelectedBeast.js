import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

class SelectedBeast extends Component {

    handleClose = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <Container>
                 <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.props.featBeast.title} </Modal.Title>
                    </Modal.Header>
                    <img src={this.props.featBeast.image_url} alt='???'/>
                        <Modal.Body>{this.props.featBeast.description}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default SelectedBeast;