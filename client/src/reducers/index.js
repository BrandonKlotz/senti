const INITIAL_STATE = {
    isLoading: false,
	  displayResults: {}

	};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                Loading: false,
                displayResults: action.displayResults
            });
        default:
            return state;
    }
};
