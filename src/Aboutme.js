import React from 'react'
import './App.css'
import './typewriter.css'

class About extends React.Component {
    render(){
        return(
            <div className="box-container2">
                <div className="services2">
                    <h1>Click for detailed View of Statistics</h1>
                    <a className='sourcerer' href="https://sourcerer.io/sapeled3"><img src="https://img.shields.io/badge/JavaScript-38%20commits-orange.svg" alt="" /></a>
                    <a className='sourcerer'  href="https://sourcerer.io/sapeled3"><img src="https://img.shields.io/badge/HTML-19%20commits-orange.svg" alt=""/></a>
                    <a className='sourcerer'  href="https://sourcerer.io/sapeled3"><img src="https://img.shields.io/badge/Java-7%20commits-orange.svg" alt="" /></a>
                </div>
                <div className="services">
                    <div className="desc">
                        <h5>LANGUAGES</h5>
                        <p className='services1'>Java</p>
                        <p className='services1'>JavaScript</p>
                    </div>
                    <div className="desc">
                        <h5>FRONT-END</h5>
                        <p className='services1'>Html</p>
                        <p className='services1'>CSS</p>
                        <p className='services1'>Reactjs</p>
                        <p className='services1'>templates</p>
                    </div>
                    <div className="desc">
                        <h5>BACK-END</h5>
                        <p className='services1'>NODEjs</p>
                        <p className='services1'>EXPRESSjs</p>
                    </div>
                    <div className="desc">
                        <h5>DATABASE</h5>
                        <p className='services1'>MONGODB</p>
                        <p className='services1'>PostgresSQL</p>
                    </div>
                </div>
            </div >
            // <div className="box-container2">
            //     {/* <div className="progress">
            //         <img src={progress} alt="progress" style={{width:"auto", margin:20, position: relative}}/>
            //     </div> */}
            // </div>
        )
    }
}

export default About;