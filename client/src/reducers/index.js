const INITIAL_STATE = {
	displayResults: {},
	isLoading: false
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_RESULTS":
            return Object.assign({}, state, {
                loading: true
            });
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                dataResults: action.dataResults
            });
        default:
            return state;
    }
}
