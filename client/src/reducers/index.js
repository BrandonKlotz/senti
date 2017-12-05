const INITIAL_STATE = {
    loading: false,
    isModalOpen: false,
	  displayResults: {},
    text: '',
    value: '',
    modal: ''
	};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // What calls this
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                displayResults: action.displayResults,
                isTextAnalyzed: true
            });
        case "REQUEST_RESULTS":
            return Object.assign({}, state, {
                loading: true,
                value: action.inputData.value
            });
        case "HOME_SCREEN":
            return Object.assign({}, state, {
                displayResults: {},
                value: ""
            });
        // MODALS
        case "MODAL_ABOUT":
            return Object.assign({}, state, {
                isModalOpen: true,
                modal: "ABOUT"
            });
        case "MODAL_CONTACT":
            return Object.assign({}, state, {
                isModalOpen: true,
                modal: "CONTACT"
            });
        case "MODAL_CLOSE":
            return Object.assign({}, state, {
                isModalOpen: false
            });
        case "MODAL_ALERT":
            return Object.assign({}, state, {
                isModalOpen: true,
                modal: "ALERT"
            });
        default:
            return state;
    }
};
