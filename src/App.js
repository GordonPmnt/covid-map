import React, { Component } from 'react';
import Map from './components/Map'
import dataGenerator from './data/dataGenerator'


class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: {},
      isFetching: true,
    };
  }

  componentDidMount() {
    this.setState({ 
      ...this.state, 
      isFetching: true, 
    });
    dataGenerator().then(
      response => this.setState({ 
        data: response.data, 
        isFetching: false, 
      })
    )
  }

  render() {

    return (
      <>
        <Map {...this.state} />
      </>
    );
  }
}

export default App;
