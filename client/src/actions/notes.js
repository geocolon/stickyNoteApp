import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';

export const POST_NOTE_REQUEST = 'POST_NOTE_REQUEST';
export const startPosting = () => ({
  type: POST_NOTE_REQUEST,
});

export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const finishPost = notes => ({
  type: POST_NOTE_SUCCESS,
  notes,
});

export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const fetchNoteSuccess = notes => ({
  type: FETCH_NOTE_SUCCESS,
  notes,
});

export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const fetchNoteRequest = () => ({
  type: FETCH_NOTE_REQUEST,
});

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const deleteNoteRequest = () => ({
  type: DELETE_NOTE_REQUEST,
});

export const fetchNote = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // const userName = getState().auth.currentUser.username;
  return fetch(`/api/notes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(note => {
      dispatch(fetchNoteSuccess(note));
    });
};

export const deleteNote = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
    })
    .then(() => {
      dispatch(fetchNote());
      // deleteNoteRequest(fetchNote(note));
    });
};

export const createNotes = (note, title) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userName = getState().auth.currentUser.username;
  dispatch(startPosting());
  return fetch(`/api/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ text: note, name: title, username: userName }),
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(fetchNote()))
    .then(() => dispatch(finishPost()))
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message,
          }),
        );
      }
    });
};
