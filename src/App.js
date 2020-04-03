import React, { Component } from 'react';
import Map from './components/Map'
import dataGenerator from './data/dataGenerator'


class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: {},
    };
  }

  async componentDidMount() {
    const { data } = await dataGenerator()
    this.setState({ data })
  }

  render() {

    return (
      <>
        <Map data={this.state.data} />
      </>
    );
  }
}

export default App;
