import $ from 'jquery-ajax';

export function fetchResults() {
  return function(dispatch) {
    dispatch(requestResults());
  };
}

function requestResults(){
  console.log('Request results was called.');
  return {
    type: "REQUEST_RESULTS"
  };
}

function receiveResults(displayResults){
  console.log('Receive results was called.');
  console.log(displayResults);
  return {
    type: "RECEIVE_RESULTS",
    displayResults
  };
}

export function addResults(inputData) {
  console.log("This is the addResults Function");
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
