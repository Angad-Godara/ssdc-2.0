import React from 'react'
import './Hometext.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Hometext() {
    return (
        <div className='text__container'>
            <div className='text__heading'>About Us</div>
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

            <div className='text__heading'>We work on</div>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Competitive Programming
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img className='text__work__image' src={'https://ssdc-sliet.github.io/assets/img/We_Work_On/Competitive-Programming.png'} />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Web Development
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img className='text__work__image' src={'https://ssdc-sliet.github.io/assets/img/We_Work_On/Web_Development.png'} />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Machine Learning
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img className='text__work__image' src={'https://ssdc-sliet.github.io/assets/img/We_Work_On/Competitive-Programming.png'} />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Cybersecurity
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img className='text__work__image' src={'https://ssdc-sliet.github.io/assets/img/We_Work_On/Competitive-Programming.png'} />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

            <div className='text__heading'>Activities</div>

            <div className='text__heading'>Faculty Advisors</div>
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

            <div className='text__heading'>Mentors</div>
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

        </div>
    )
}

export default Hometext