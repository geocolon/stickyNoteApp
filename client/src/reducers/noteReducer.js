import {
  POST_NOTE_REQUEST,
  POST_NOTE_SUCCESS,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_REQUEST,
  DELETE_NOTE_REQUEST,
} from '../actions/notes';

const initialState = {
  user_info: null,
  loading: false,
  error: null,
};

export default function notes(state = initialState, action) {
  if (action.type === POST_NOTE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === POST_NOTE_SUCCESS) {
    return Object.assign({}, state, {
      user_info: action.notes,
      error: null,
    });
  } else if (action.type === FETCH_NOTE_SUCCESS) {
    return Object.assign({}, state, {
      user_info: action.notes,
      error: null,
    });
  } else if (action.type === FETCH_NOTE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === DELETE_NOTE_REQUEST) {
    return Object.assign({}, state, {
      user_info: action.notes,
    });
  }
  return state;
}
