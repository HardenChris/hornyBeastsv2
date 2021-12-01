import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
    render() {
        return (
            <div>
               let beastBoy = this.props.beastAll.map(beast => <HornedBeast newModalBeast={this.props.newModalBeast} beast={beast}/>)
            </div>
        );
    }
}

export default Main;