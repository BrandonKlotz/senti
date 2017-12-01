import $ from 'jquery-ajax';

//  Action handles receiving analysis from Watson and maps the results to props in reducer 
function receiveResults(displayResults){
  console.log('This is the output that was returned from Watson.');
  console.log(displayResults);
  return {
    type: "RECEIVE_RESULTS",
    displayResults
  };
}

//  Function called by submit button. Handles submission of information on UI to backend for analysis
export function addResults(inputData) {
  return function(dispatch) { 
  // we need to call an action here that will tell the reducer to set loading state to be true
  // and we should rename this function fetchResults
    $.ajax({
      url:"/api/tone",
      method: "POST",
      contentType:"application/json",
      data: JSON.stringify(inputData)
    }).done(function(dataResult){
      dispatch(receiveResults(dataResult));
    });
  };
}
