import $ from 'jquery'

export function fetchMedals(type){
    return (dispatch, getState) => {

        dispatch(requestMedals(getState(),type))

        //is data already into the state tree?
        if(getState().data[type].length) return dispatch(receiveMedals(getState(), ''))


        if(getState().data[type].length === 0 && type !== 'all'){

            let items = getState().data.all.filter((v) => {
                return v[type].length > 0
            })

            return dispatch(receiveMedals(getState(), items))
        }

        //let s call the JSON file just at the first page loading
        return $.get("http://localhost:3000/olympics_2008_medalists.json").done((items) => {
            let rankable = sortInitData(items);
            dispatch(receiveMedals(getState(), rankable))
        })
    }
}

export function sortInitData(items){
    let medals = {}
    let rankable = []

    for (let i in items) {
        if (medals.hasOwnProperty(items[i].country)) {
            medals[items[i].country]['all']++
            medals[items[i].country][items[i].medal.toLowerCase()]
                .push({
                    'athlete': items[i].athlete,
                    'event': items[i].event,
                    'sex': items[i].sex
                })
        }
        else {
            medals[items[i].country] = {
                'all': 1,
                'gold': [],
                'silver': [],
                'bronze': []
            }
            medals[items[i].country]['country'] = items[i].country
            medals[items[i].country][items[i].medal.toLowerCase()].push({
                'athlete': items[i].athlete,
                'event': items[i].event,
                'sex': items[i].sex
            })
        }
    }

    for (let x in medals) {
        rankable.push(medals[x])
    }

    //sorting by global medals ascending
    return rankable.sort((a, b) => {
        if (a.all < b.all)
            return -1;
        if (a.all > b.all)
            return 1;
        return 0;
    }).reverse()
}

export function requestMedals(state, filter){
    return {
        ...state,
        type: "REQUEST_MEDALS",
        selectedFilter: filter,
        isLoading:true
    }
}

export function receiveMedals(state, data){
    if(data !== '') {
        let newData = Object.assign({}, state.data, {[state.selectedFilter]: data})
        return {
            data: newData,
            type: "RECEIVE_MEDALS",
            isLoading: false,
            selectedFilter: state.selectedFilter
        }
    }
    return {
        ...state,
        isLoading:false
    }
}