import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.stor.map(storItem=> <Item item={storItem.item} price={this.props.shouldDiscount? storItem.price*(1-storItem.discount):storItem.price} />)
    }
}

export default Home