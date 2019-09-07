import React from 'react'
import NavBar from './NavBar'
import Welcome from './Welcome'
import Aboutme from './Aboutme'
import './typewriter.css'
import './App.css';

class App extends React.Component {
  render(){
    return(
        <div className='box-container'>
          <div className="box box1">
            <NavBar />
          </div>
          <div className="box box2">
            {/* <Welcome /> */}
            <Aboutme />
          </div>
        </div>
    )
  }
}

export default App