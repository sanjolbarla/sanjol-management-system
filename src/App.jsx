import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';
import * as ReactBootStrap from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1fUldKZtjT-z1hIx-QGAW4pvDc8m-FouEKWQYGrWPFBk',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Event Management Company</div>
        </header>
        <div align="center" style={{paddingTop: 30}}>
        {
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl.no</th>&emsp;&emsp;&emsp;
                <th>Start Time</th>&emsp;&emsp;&emsp;
                <th>End Time</th>&emsp;&emsp;&emsp;
                <th>Event Name</th>&emsp;&emsp;&emsp;
                <th>Location</th>
              </tr>
            </thead>
            <br/>
            <tbody>
              {data.map((obj, index) => {
                return (
                  <tr>
                    <th>{index+1}</th>&emsp;&emsp;&emsp;
                    <td>{obj.Start}</td>&emsp;&emsp;&emsp;
                    <td>{obj.End}</td>&emsp;&emsp;&emsp;
                    <td>{obj.Event}</td>&emsp;&emsp;&emsp;
                    <td>{obj.Location}</td>
                  </tr>
                )
              })}
            </tbody>
          </ReactBootStrap.Table>
        }
        </div>
      </div>
    );
  }
}

export default App;