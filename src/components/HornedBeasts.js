import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';


class HornedBeasts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            likes:0
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    handleImageClick = () => {
        this.props.newModalBeast(this.props.beast)
    }
    
    render() {
        return (
            <h2> 
                <Card bg='secondary' text='white' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} onClick={this.handleImageClick} />
                    <Card.Body>
                        <Card.Title>{this.props.beast.title}</Card.Title>
                        <Card.Text>
                            {this.props.beast.description}
                            {"\n"}
                            Horns:'{this.props.beast.horns}'
                        </Card.Text>
                        <Button variant='primary' onClick={this.handleClick}>{this.state.likes}</Button>
                        <>&hearts;</>
                    </Card.Body>
                </Card>
            </h2>
        );
    }
}

export default HornedBeasts;