import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import './explore.css'
import { GrResources } from 'react-icons/gr'

function Explore() {

    const [active, setactive] = useState(1);

    return (
        <div className='explore'>
            <div className='landing__background__rvs'></div>
            <div className='explore__container'>
                <div className='explore__title'>
                    <h3>Welcome to</h3>
                    <h1>SSDC Explore</h1>
                </div>
                <div className='explore__heading'><GrResources size={'20px'} /> <span>Resources</span></div>
                <div className='resources__wrapper'>
                    <div className='resources__headings__wrapper'>
                        <div onClick={() => setactive(1)} className={(active == 1) ? 'resources__headings active__resource' : 'resources__headings'}><div>DSA / Competitive Programming</div></div>
                        <div onClick={() => setactive(2)} className={(active == 2) ? 'resources__headings active__resource' : 'resources__headings'}><div>Web Development</div></div>
                        <div onClick={() => setactive(3)} className={(active == 3) ? 'resources__headings active__resource' : 'resources__headings'}><div>Data Science / Machine Learning</div></div>
                        <div onClick={() => setactive(4)} className={(active == 4) ? 'resources__headings active__resource' : 'resources__headings'}><div>Cybersecurity</div></div>
                    </div>
                    <div className='main__resource__container'>
                        <div>
                            {(active == 1)
                                ?
                                <div>
                                    <h3>Cp and dsa related guidance and plans</h3>
                                </div>
                                :
                                (
                                    (active == 2)
                                        ?
                                        <div className={(active == 2) ? 'show' : ''}>
                                            <h3>Development related guidance plans</h3>
                                        </div>
                                        :
                                        (active == 3)
                                            ?
                                            <div className={(active == 3) ? 'show' : ''}>
                                                <h3>ml/data science related guidance plans</h3>
                                            </div>
                                            :
                                            <div className={(active == 4) ? 'show' : ''}>
                                                <h3>Cybersec related guidance plans</h3>
                                            </div>
                                )}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default Explore