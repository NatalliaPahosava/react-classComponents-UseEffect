import React, { Component } from 'react'
import './App.css'

class SimpleComponent extends Component {
  render() {
    return <h2>Simple Class Component</h2>
  }
}

// class WithState extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {color: 'red', firstName: 'Jon'}
//     console.log(this.props)
//   }
//   render() {
//     return (
//       <>
//         <h2 style={{ color:this.state.color }}>
//           with State {this.state.color}{' '}
//         </h2>
//         <h2> name is {this.state.firstName} </h2>
//         <h3>{this.props.someProps}</h3>
//       </>
//     )
//   }
// }


class Car extends Component {
  constructor() {
    super()
    this.state = { brand: 'Ford', model: 'Mustang', color: 'red', year: 1964 }
  }

  changeColor = () => {
    this.setState({color: 'blue' })
  }

  componentDidMount(){
    console.log('component mounted')
    fetch('https://api.sampleapis.com/futurama/info')
    .then(res=> res.json())
    .then(res => console.log(res))
    .catch(err=> console.error(err))

  }
  componentDidUpdate(){
    console.log('component was update')
  }
  componentWillUnmount(){
    console.log('component being unmounted')
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand} </h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

////parent
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SimpleComponent />
        <Car />
        {/* <WithState someProps='here are my props from parent'/> */}
        {/* ////import simple component here */}
      </header>
    </div>
  )
}

export default App
