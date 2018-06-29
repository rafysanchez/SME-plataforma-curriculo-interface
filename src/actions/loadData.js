import { API_URL } from '../constants';

export default function loadData(url, action1, action2) {
  return dispatch => {
    dispatch({ type: action1 });
    fetch(API_URL + url)
      .then(response => response.json())
      .then(data => {
        dispatch({ data, type: action2 });
      });
  };
}
