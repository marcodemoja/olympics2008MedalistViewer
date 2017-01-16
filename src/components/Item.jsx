import React from 'react'

class Item extends React.Component {

    static propTypes = {
        medals: React.PropTypes.number,
        gold: React.PropTypes.array,
        silver: React.PropTypes.array,
        bronze: React.PropTypes.array,
        country: React.PropTypes.string
    }

    render(){
        return (
            <tr id={this.props.country}>
                <td>{this.props.country}</td>
                <td className="all">{this.props.medals}</td>
                <td className="gold">{this.props.gold.length}</td>
                <td className="silver">{this.props.silver.length}</td>
                <td className="bronze">{this.props.bronze.length}</td>
            </tr>
        )
    }
}

export default Item