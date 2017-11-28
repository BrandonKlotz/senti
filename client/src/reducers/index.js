const INITIAL_STATE = {
    isloading: true,
    dataResults: {},
		document_tone: ""
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
