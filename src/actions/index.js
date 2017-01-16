import $ from 'jquery'

export function fetchMedals(type){
    return (dispatch, getState) => {
        dispatch(requestMedals(getState(),type))
        if(getState().data.length > 0){
            let items = filterMedals(getState().data, type)
            return dispatch(receiveMedals(getState(), items))
        }
            return $.get("http://localhost:3000/olympics_2008_medalists.json").done((items) => {
                let medals = {}
                let rankable = []

                for (let i in items) {
                    if (medals.hasOwnProperty(items[i].country)) {
                        medals[items[i].country][items[i].medal.toLowerCase()]++
                        medals[items[i].country]['total']++
                        medals[items[i].country][items[i].medal.toLowerCase() + 'Winners']
                            .push({
                                'athlete': items[i].athlete,
                                'event': items[i].event,
                                'sex': items[i].sex
                            })
                    }
                    else {
                        medals[items[i].country] = {
                            'total': 1,
                            'gold': 0,
                            'silver': 0,
                            'bronze': 0,
                            'goldWinners': [],
                            'silverWinners': [],
                            'bronzeWinners': []
                        }
                        medals[items[i].country]['country'] = items[i].country
                        medals[items[i].country][items[i].medal.toLowerCase()] = 1
                        medals[items[i].country][items[i].medal.toLowerCase() + 'Winners'].push({
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
                rankable.sort((a, b) => {
                    if (a.total < b.total)
                        return -1;
                    if (a.total > b.total)
                        return 1;
                    return 0;
                }).reverse()

                dispatch(receiveMedals(getState(), rankable))
            })
    }
}

function filterMedals(medals, type){
        return medals.filter((v) => {
            return v[type] > 0
        })
}

export function requestMedals(state, filter){
    return {
        type: "REQUEST_MEDALS",
        isLoading: true,
        data: state.data,
        selectedFilter: filter
    }
}

export function receiveMedals(state, data){
    return {
        type: "RECEIVE_MEDALS",
        isLoading: false,
        data: data,
        selectedFilter: state.selectedFilter
    }
}