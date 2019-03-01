import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { API_CALL_REQUEST } from './reducer';

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: API_CALL_REQUEST })
  };
};

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <div className="container">
          <div class="mx-auto mt-5">
            <img src={dog || logo} class="rounded" alt="" />
          </div>

          <button
            type="button"
            class="btn btn-primary btn-lg mt-5"
            disabled={fetching}
            onClick={onRequestDog}>
            {fetching ? 'Fetching...' : 'Request a Dog'}
          </button>

          {dog ? (
            <p className="App-intro mt-5">Keep clicking for new dogs</p>
          ) : (
              <p className="App-intro mt-5">Replace the React icon with a dog!</p>
            )}

          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
