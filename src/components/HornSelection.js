
import React, { Component } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

class HornSelection extends Component {

    handleChange = (event) => {
    const selection = Number(event.target.value);
    this.props.userSelection(selection);   
    }

    render() {
        return (
            <div>
                <Form>
                <Form.Select onChange={this.handleChange} aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">One Hundred</option>
                    <option value="-1">All</option>
                    </Form.Select>
            </Form>
            <ListGroup>

            </ListGroup>
            </div>
        );
    }
}

export default HornSelection;

