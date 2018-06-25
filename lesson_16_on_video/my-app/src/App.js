import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest_block"> Отдых </div>
    )
  } else {
      return (
        <div className="work_block"> Время работать над собой! </div>
      )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  conponentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        {/* метод (хук) mounting когда компонент появляется на странице
        unmounting когда компонент исчезает со страницы:  */}
        <h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;
