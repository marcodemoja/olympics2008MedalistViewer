import React from 'react'
import { connect } from 'react-redux'
import {fetchMedals} from '../actions'
import FilterButton from '../components/FilterButton'

class FiltersContainer extends React.Component{

    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        selectedFilter: React.PropTypes.string
    }

    handleFilter(type){
        this.props.dispatch(fetchMedals(type))
    }

    render(){
        return (<div> <FilterButton onClick={e => this.handleFilter('gold')} filterValue="gold" label="Gold"/>
            <FilterButton onClick={e => this.handleFilter('silver')} filterValue="silver" label="Silver"/>
            <FilterButton onClick={e => this.handleFilter('bronze')} filterValue="bronze" label="Bronze"/></div>)
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(FiltersContainer)