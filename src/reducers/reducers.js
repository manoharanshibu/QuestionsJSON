const initialState = {
    jsonData: []
}

export const reducers = (state = initialState, action) => {
    switch ( action.type ){
        case "LOAD_DATA":
            return { jsonData: state.jsonData};
        default:
            return state;
    }
}