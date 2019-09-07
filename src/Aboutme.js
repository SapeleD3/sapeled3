import React from 'react'
import './App.css'
import './typewriter.css'
import progress from './progress.png'
import { relative } from 'path'

class About extends React.Component {
    render(){
        return(
            <div className="box-container2">
                <div className="progress">
                    <img src={progress} alt="progress" style={{width:"auto", margin:20, position: relative}}/>
                </div>
            </div>
        )
    }
}

export default About;