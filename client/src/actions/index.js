import $ from 'jquery-ajax';

export function fetchResults() {
  return function(dispatch) {
    dispatch(requestResults());

    $.post("/api/tone/").done(function(data){
      dispatch(receiveResults(data));
    });
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
  return {
    type: "RECEIVE_RESULTS",
    displayResults

  };
}

export function addResults(dataResult) {
  return function(dispatch) {
    $.ajax({
      url:"/api/tone/",
      method: "POST",
      contentType:"application/json",
      data: JSON.stringify(dataResult)
    }).done(function(){
      dispatch(fetchResults());
    });
  };
}
