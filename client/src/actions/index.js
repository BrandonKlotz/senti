import $ from 'jquery-ajax';

//  Action handles receiving analysis from Watson and maps the results to props in reducer 
function receiveResults(displayResults){
  return {
    type: "RECEIVE_RESULTS",
    displayResults
  };
}

//  Function called by submit button. Handles submission of information on UI to backend for analysis
export function addResults(inputData) {
  return function(dispatch) {
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
