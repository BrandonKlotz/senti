const INITIAL_STATE = {
    loading: false,
	  displayResults: {},
    text: '',
    value: '',
	};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                displayResults: action.displayResults,
            });
        case "REQUEST_RESULTS":
            return Object.assign({}, state, {
                loading: true,
                text: action.inputData.text
            });
        default:
            return state;
    }
};
