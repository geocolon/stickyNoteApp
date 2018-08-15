import API_BASE_URL from '../config';
import UserReducer from '../reducers/index';

export const FETCH_POSTS = 'FETCH_POST';

export const fetchPost = () => dispatch => {
  fetch(`${API_BASE_URL}/api`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(users => {
      dispatch(setLoginSuccess(users));
    });
};
