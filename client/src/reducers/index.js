const INITIAL_STATE = {
<<<<<<< HEAD
    loading: false,
	  displayResults: {}

	};

=======
                 loading: false,
    	   displayResults: {},
	};
 
 // Receives analysis from Watson and maps data object to displayResults for use in front-end
>>>>>>> origin/server-clean
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
