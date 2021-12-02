import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class Main extends Component {
    
    render() {
        let beastBoy = this.props.beastAll.map(beast => <HornedBeasts newModalBeast={this.props.newModalBeast} beast={beast}/>)
        return (
            <Container>
                 <Row xs={1} sm={2} md={3} lg={4} xl={7}>
                    {beastBoy}
                </Row>
            </Container>
        );
    }
}

export default Main;