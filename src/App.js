import React from 'react'
import NavBar from './NavBar'
import Welcome from './Welcome'
import Aboutme from './Aboutme'
import './typewriter.css'
import './App.css';


const initialState = {
  route : 'welcome',
  welPage : false
}
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState
  }

  onRouteChange = (route) => {
    if(route === 'about'){
      this.setState(initialState)
    }else if (route === 'welcome') {
      this.setState({welPage: true})
    }this.setState({route: route})
  }
  render(){
    return(
        <div className='box-container'>
          <div className="box box1">
            <NavBar onRouteChange={this.onRouteChange} cmd={this.state.route}/>
          </div>
          <div className="box box2">
            {this.state.route === 'welcome' ? 
            <Welcome /> :
            <Aboutme />
            }
          </div>
        </div>
    )
  }
}

export default App