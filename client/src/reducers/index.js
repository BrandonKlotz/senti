const INITIAL_STATE = {
    loading: false,
	  displayResults: {}
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
                displayResults: action.displayResults
            });
        default:
            return state;
    }
}
