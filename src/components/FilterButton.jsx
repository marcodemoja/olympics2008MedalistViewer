import React from 'react'

class FilterButton extends React.Component{

    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        filterValue: React.PropTypes.string.isRequired
    }


    render() {
        return <div><button onClick={ e => this.props.onClick(this.props.filterValue)}>{this.props.label}</button></div>
    }

}



export default FilterButton