import $ from "jquery-ajax";

export function fetchSentimentData() {
	return function(dispatch) {
		dispatch(requestShoppingList());
		// When working with a full-stack app, we can reach out APIs by just
		// using the URL path. Since it's the same domain, we can leave that off.
		$.get("/api/items/").done(function(data) {
			dispatch(receiveShoppingList(data));
		});
	};
}
