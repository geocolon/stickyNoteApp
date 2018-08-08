import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import ListDashboard from '../containers/ListDashboard';
import { createNotes, fetchNote } from '../actions/notes';
import './Dashboard.css';

let divStyle = {
  padding: '10px',
};
const required = value => (value ? undefined : 'Required');

export class Dashboard extends React.Component {
  onSubmit(values) {
    const stepsOneTwo = () => {
      this.props
        .dispatch(createNotes(values.imageurl, values.title))
        .then(() => {
          this.props.dispatch(fetchNote());
        });
    };
    return stepsOneTwo();
  }

  render() {
    return (
      <div style={divStyle} className="dash-background">
        <div className="col-12">
          <div className="form-background">
            <form
              className="content-form"
              onSubmit={this.props.handleSubmit(values => {
                this.onSubmit(values);
                this.props.dispatch(fetchNote());
              })}
            >
              <label htmlFor="title">Sticky Title</label>
              <Field
                className="titlenote"
                component="input"
                type="text"
                name="title"
                validate={required}
              />
              <label htmlFor="imageurl">Text or image URL</label>
              <Field
                className="note"
                component="textarea"
                type="text"
                name="imageurl"
                validate={required}
              />{' '}
              <br />
              <center>
                <button type="submit">Submit</button>
              </center>
            </form>
          </div>
        </div>
        <ListDashboard />
      </div>
    );
  }
}

export default reduxForm({
  form: 'dashboard',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('dashboard', Object.keys(errors)[0])),
})(Dashboard);
