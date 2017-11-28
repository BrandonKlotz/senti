import $ from 'jquery-ajax';

export function fetchResults() {
  return function(dispatch) {
    dispatch(requestResults());

    $.get("api/tone").done(function(data){
      dispatch(receiveResults(data));
    });
  };
}

function receiveResults(displayResults){
  console.log('recieve results was called.');
  return {
    type: "RECEIVE_RESULTS",
    displayResults

  };
}

function requestResults(){
  console.log('Receive results was called.');
  return {
    type: "REQUEST_RESULTS"
  };
}

export function addResults(dataResult) {
  return function(dispatch) {
    $.ajax({
      url:"api/tone",
      method: "POST",
      contentType:"application/json",
      data: JSON.stringify(dataResult)
    }).done(function(){
      dispatch(fetchResults());
    });
  };
}
