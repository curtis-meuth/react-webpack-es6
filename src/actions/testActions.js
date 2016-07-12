import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function receiveTestData(testData) {
  return {
    type: types.LOAD_API_DATA,
    testData
  }
}

export function fetchTestData() {
  return function(dispatch) {
    return fetch('http://localhost:9000/api')
      .then(response => response.json())
      .then(json => dispatch(receiveTestData(json)));
  }
}
