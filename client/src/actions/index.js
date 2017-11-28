import $ from 'jquery-ajax';

export function fetchResults() {
  return function(dispatch) {
    dispatch(requestResults());

    $.get("api/tone").done(function(data){
      dispatch(receiveResults(data));
    });
  };
}

function receiveResults(){
  console.log('recieve results was called.');
  return {
    type: "RECEIVE_RESULTS"
  }
}

function requestResults(displayResults){
  console.log('recieve results was called.');
  return {
    type: "REQUEST_RESULTS"
    displayResults
  }
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
