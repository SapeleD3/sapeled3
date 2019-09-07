import React from 'react'
import mine from './mine.jpeg'

class Welcome extends React.Component {
    render() {
        return (
            <div className="box-container2">
                <div className="services">
                    <div class="part">
                        <div class="octo">
                            <div class="octo1">
                                <img src={mine} alt="face" width="300" height="456" />
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        <h1>WHO AM I</h1>
                        <p> I am a Computer Science & Informatics 3rd Year Undergraduate student of Federal University Otuoke (FUO).
                            I Love exploring technology old and new. i am an active learner. And an enthusiat in promoting and helping grow the tech EcoSystem in my community actively and Passively</p>
                        <p>Hope i can be of Help</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Welcome