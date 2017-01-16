const initState = {
    isLoading:true,
    selectedFilter:'all',
    data:{
        all: [],
        gold: [],
        silver: [],
        bronze: []
    }
}

export default (state=initState, action) => {
    //console.log("Reducer was called with state ", state, " and action ", action)
    switch(action.type){
        case 'REQUEST_MEDALS':
            return Object.assign({}, state,{
                ...action
            })
        case 'RECEIVE_MEDALS':
            return Object.assign({},state,{
                ...action
            })
        default:
            return state
    }
}