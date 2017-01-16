import React, { Component } from 'react';
import Item from './Item'

class List extends Component {

    static propTypes = {
        items: React.PropTypes.array
    }

    renderItem(item){
        return <Item key={item.country} medals={item.total} country={item.country} gold={item.gold} silver={item.silver} bronze={item.bronze} />
    }

    render(){
        let items = []
        for (let i in this.props.items) {
            items.push(this.renderItem(this.props.items[i]))
        }

        return <ul>{items}</ul>

    }
}


export default List;