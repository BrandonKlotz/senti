import $ from 'jquery-ajax';
import { isEmpty } from 'lodash';

//  Action handles receiving analysis from Watson and maps the results to props in reducer
function receiveResults(displayResults){
  console.log('This is the output that was returned from Watson.');
  console.log(displayResults);
  return {
    type: "RECEIVE_RESULTS",
    displayResults
  };
}

//  Dispatch request results before AJAX call is made to set loading to true
function requestResults(inputData) {
  return {
    type: "REQUEST_RESULTS",
    inputData
  };
}

//  Function called by submit button. Handles submission of information on UI to backend for analysis
export function addResults(inputData) {
  return function(dispatch) {
    dispatch(requestResults(inputData));
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
