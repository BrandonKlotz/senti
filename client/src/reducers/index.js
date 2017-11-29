const INITIAL_STATE = {
                 loading: false,
    	   displayResults: {},
	};
 
 // Receives analysis from Watson and maps data object to displayResults for use in front-end
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                displayResults: action.displayResults
            });
        default:
            return state;
    }
}
