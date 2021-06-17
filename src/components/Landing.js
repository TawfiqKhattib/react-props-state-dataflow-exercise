import React, { Component } from 'react';
import Item from './Item';
class Landing extends Component {

    render() {
        return (
            <div>
                welcome, {this.props.user}, The hottest item is {this.props.hottest.map(storItem=> <Item item={storItem.item} price={storItem.price} />)}
                <p></p>
            </div>
        )

    }
}

export default Landing