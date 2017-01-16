import React, { Component } from 'react';
import Item from './Item'
import {Table, Button, ButtonGroup} from 'react-bootstrap'

class List extends Component {

    static propTypes = {
        items: React.PropTypes.array
    }

    renderItem(item){
        return <Item key={item.country} medals={item.all} country={item.country} gold={item.gold} silver={item.silver} bronze={item.bronze} />
    }

    render(){
        let items = []
        for (let i in this.props.items) {
            items.push(this.renderItem(this.props.items[i]))
        }
        /* I wanted to implement sorting desc/asc for every medal column into the table that's why these buttons into the render method
           but I haven't enough time.
        */
        return (<Table responsive hover striped bordered condensed>
                <thead>
                    <tr className="medals-list-header">
                        <td>Country</td>
                        <td><ButtonGroup><Button>All</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Gold</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Silver</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Bronze</Button></ButtonGroup></td>
                    </tr>
                </thead>
            <tbody>{items}</tbody>
            </Table>)

    }
}

export default List;