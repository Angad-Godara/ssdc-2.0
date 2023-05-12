import React from 'react'
import './Hometext.css'
import Accordian from './Accordian';
import { BsInfoCircleFill } from 'react-icons/bs'
import ImageSlider from '../Carousel/ImageSlider';
import { GiNetworkBars } from 'react-icons/gi'
import { AiFillCode } from 'react-icons/ai'
import { MdOutlinePersonPin } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'

function Hometext() {

    return (
        <div className='text__container'>
            <div className='text__heading about'><BsInfoCircleFill /><div className='text__heading__title'>About Us </div></div>
            <div className='text__para'>SLIET Software Development Club (SSDC), is a Departmental Club of Computer Science & Engineering, SLIET Longowal. This club was founded by CSE - 2017 undergrads. The team currently comprises of 40+ developers. The team aims to brush up the coding skills in young enthusiasts, with major goals to crack the latest Coding Contests, Challenges & Interviews without any reluctance landing them in some decent technical job prospects. In due course of grooming it's pupils, the club focuses on project-oriented approach in diverse (Web Development, App Development, Machine Learning, Cybersecurity, etc) to ensure holistic development of it's members. Furthermore, the club organises workshops and monthly coding compitions for college students as well which in turn helps us discover young wizards in IT fields.</div>

            <div className='text__items'>
                <div className='text__item'>
                    <span className='text__item__title'>06+</span>
                    <span className='text__item__info'>Years of Establishment</span>
                </div>
                <div className='text__item'>
                    <span className='text__item__title'>15+</span>
                    <span className='text__item__info'>Projects worked</span>
                </div>
            </div>

            <div className='text__heading work'><GiNetworkBars /><div className='text__heading__title'>We work on</div></div>

            <div className='accordian'>
                <Accordian title={'Competitive Programming'} ico={'cp'} img={'t'} imgsrc={'https://contentstatic.techgig.com/photo/91625283/4-coding-habits-to-improve-your-efficiency-in-competitive-programming.jpg?529153'} text={'t'} textsrc={'Competitive programming is a mental sport, where you are pit against the best of the best. It is a test of your problem-solving abilities, your knowledge of algorithms, and your ability to think on your feet. Competitive programming is a journey to become a better problem solver and a better programmer.'} />
                <Accordian title={'Web Development'} img={'t'} ico={'webd'} imgsrc={'https://www.kubaslabs.eu/wp-content/uploads/2022/01/4-3.png.webp'} text={'t'} textsrc={'Web development is the art of bringing ideas to life on the internet, and the power to reach a global audience. It allows you to create interactive, user-friendly websites that make a real impact on peoples lives. Web development is a way to turn your passion into a career, and to make a difference in the world.'} />
                <Accordian title={'Machine Learning'} img={'t'} ico={'ml'} imgsrc={'https://dv-website.s3.amazonaws.com/uploads/2019/06/ad_eao2_mlai_071119.jpg'} text={'t'} textsrc={'Machine learning is the future of technology, and the possibilities are endless. It allows you to make sense of big data and uncover insights that were previously hidden. Through machine learning, you can create intelligent systems that can learn and adapt on their own, and make decisions that are beyond human capabilities.'} />
                <Accordian title={'Cybersecurity'} img={'t'} ico={'cs'} imgsrc={'https://www.simplilearn.com/ice9/free_resources_article_thumb/Rising_Cyberattacks_on_MSPs.jpg'} text={'t'} textsrc={'Cybersecurity is the ultimate challenge, where you have to stay one step ahead of the hackers. It is a field where you can make a real difference by protecting individuals, organizations and governments from cyber threats. Cybersecurity is not just a job, it is a mission to protect the digital world and the people who depend on it.'} />
            </div>

            <div className='text__heading faculty'><MdOutlinePersonPin /><div className='text__heading__title'>Faculty Advisors</div></div>
            <div className='text__faculty__container'>
                <div className='text__faculty'>
                    <div className='faculty__img'>
                        <img className='faculty__img' src={'https://ssdc-sliet.github.io/assets/img/teachers/Sachan.png'} />
                    </div>
                    <div className='faculty__data'>
                        <span className='text__item__title'>Prof Manoj Sachan</span>
                        <span className='text__item__info'>Faculty Advisor</span>
                    </div>
                </div>
                <div className='text__faculty'>
                    <div className='faculty__img'>
                        <img className='faculty__img' src={'https://ssdc-sliet.github.io/assets/img/teachers/Rahul.png'} />
                    </div>
                    <div className='faculty__data'>
                        <span className='text__item__title'>Er Rahul Gautam</span>
                        <span className='text__item__info'>Co-Faculty Advisor</span>
                    </div>
                </div>
            </div>

            <div className='text__heading mentor'><FaHandsHelping /><div className='text__heading__title'>Mentors</div></div>
            <div className='text__faculty__container'>
                <div className='text__faculty'>
                    <div className='faculty__img'>
                        <img className='faculty__img' src={'https://ssdc-sliet.github.io/assets/img/mentors/Arvind.png'} />
                    </div>
                    <div className='faculty__data'>
                        <span className='text__item__title'>Arvind Kumar</span>
                        <span className='text__item__info'>Research Scholar</span>
                    </div>
                </div>
                <div className='text__faculty'>
                    <div className='faculty__img'>
                        <img className='faculty__img' src={'https://ssdc-sliet.github.io/assets/img/mentors/Marut%20Jindal.jpg'} />
                    </div>
                    <div className='faculty__data'>
                        <span className='text__item__title'>Marut Jindal</span>
                        <span className='text__item__info'>Research Scholar</span>
                    </div>
                </div>
            </div>

            <div className='text__heading activities' style={{ marginBottom: '15px' }}><AiFillCode /><div className='text__heading__title'>Activities</div></div>
            <ImageSlider use={'home'} />
        </div >
    )
}

export default Hometext