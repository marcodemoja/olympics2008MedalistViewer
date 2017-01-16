import React, { PropTypes } from 'react'
import List from '../components/List'
import FiltersContainer from './FiltersContainer'
import { connect } from 'react-redux'
import { fetchMedals } from '../actions'

class AsyncListContainer extends React.Component{

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired,
        selectedFilter: PropTypes.string.isRequired
    }


    /*constructor(props){
        super(props)

    }*/

    componentDidMount(){
        this.props.dispatch(fetchMedals('total'))
    }

    componentWillReceiveProps(){
    }

    render(){
        if(!this.props.isLoading && this.props.items.length > 0){
            return (<section className="filterContainer">
                <FiltersContainer />
                <div><List items={this.props.items} /></div>
            </section>)
         } else {
            return <div>Loading</div>
         }


    }
}


function mapStateToProps(state){
    return {
        items: state.data,
        isLoading:state.isLoading,
        selectedFilter: state.selectedFilter
    }
}

export default connect(mapStateToProps)(AsyncListContainer)
