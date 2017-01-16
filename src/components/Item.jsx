import React from 'react'

class Item extends React.Component {

    static propTypes = {
        medals: React.PropTypes.number,
        gold: React.PropTypes.number,
        silver: React.PropTypes.number,
        bronze: React.PropTypes.number,
        country: React.PropTypes.string
    }

    render(){
        return <li>{this.props.country} Total: {this.props.medals} Gold: {this.props.gold} Silver: {this.props.silver}, Bronze: {this.props.bronze}</li>
    }
}

export default Item