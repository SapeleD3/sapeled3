import React from 'react'
import logo from './sd3.png'

class NavBar extends React.Component {
    render() {
        const {onRouteChange} = this.props
        return (
            <div className="box-container1">
                <img src={logo} alt="mylogo" style={{width:90, margin:10}}/>
                <div className="cmd">
                    <div className="execBar">
                        <div className="min"></div>
                        <div className="max"></div>
                        <div className="exit"></div>
                    </div>
                    <div className="content">
                        <p>Moses Website [Version 1.0]</p>
                        <p>(c) 2019 moSite. All right reserved</p>
                        <div className="show">
                            <p className="anim">C:\SAPELED3.DEV> </p>
                            <p className="line anim-typewriter"> npm install introduction</p>
                        </div>
                        <div className="intro">
                            <h1>MOSES SAPELE HERE</h1>
                            <h1>WELCOME TO MY WEBSITE</h1>
                        </div>
                    </div>
                </div>
                <div className="buttContainer">
                    <button className="smooth" onClick={()=>onRouteChange('welcome')}>Welcome</button>
                    <button className="smooth" onClick={()=>onRouteChange('about')}>my Stack</button>
                    <button className="smooth">Selected Projects</button>
                    <button className="smooth">Blog & Vblog - Coming Soon</button>
                </div>
            </div>
        )
    }
}

export default NavBar