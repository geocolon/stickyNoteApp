import { combineReducers } from 'redux';
import NoteReducer from './noteReducer';
import { FETCH_NOTE_SUCCESS } from '../actions/notes';
import AuthReducer from './authReducer';
import Protecteddata from './protected-data';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer.plugin({
    dashboard: (state, action) => {
      // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case FETCH_NOTE_SUCCESS:
          return undefined; // <--- blow away form data
        default:
          return state;
      }
    },
  }),
  user: NoteReducer,
  protected: Protecteddata,
  auth: AuthReducer,
});

export default rootReducer;
