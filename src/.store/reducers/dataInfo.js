import initialState from '../initialState';

export default function dataInfo (state = initialState, action) {
    switch (action.type) {
        case "SET_ROWS":
            return {...state, rows: action.payload}
        case "SET_FILTERS":
            return {...state, filters: action.payload}
        default:
            return state
    }
}