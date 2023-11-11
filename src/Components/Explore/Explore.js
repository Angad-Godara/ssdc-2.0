import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import './explore.css'
import { GrResources } from 'react-icons/gr'
import ResourceCard from './ResourceCard';

function Explore() {

    const [active, setactive] = useState(1);

    return (
        <div className='explore'>
            <div className='landing__background__rvs'></div>
            <div className='explore__container'>
                <div className='explore__title'>
                    <h3>Welcome to</h3>
                    <h1>SSDC(beta) Explore</h1>
                </div>
                <div className='explore__heading'><GrResources size={'20px'} /> <span>Resources</span></div>
                <div className='resources__wrapper'>
                    <div className='resources__headings__wrapper'>
                        <div onClick={() => setactive(1)} className={(active === 1) ? 'resources__headings active__resource' : 'resources__headings'}><div>DSA / Competitive Programming</div></div>
                        <div onClick={() => setactive(2)} className={(active === 2) ? 'resources__headings active__resource' : 'resources__headings'}><div>Application Development</div></div>
                        <div onClick={() => setactive(3)} className={(active === 3) ? 'resources__headings active__resource' : 'resources__headings'}><div>Data Science / Machine Learning</div></div>
                        <div onClick={() => setactive(4)} className={(active === 4) ? 'resources__headings active__resource' : 'resources__headings'}><div>Cybersecurity</div></div>
                    </div>
                    <div className='main__resource__container'>
                        <div>
                            {(active === 1)
                                ?
                                <div>
                                    {/* <h3>CP and DSA related guidance and plans</h3> */}
                                    <div className='resource__card__wrapper'>
                                        <ResourceCard title='Basics of CP' url='https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/' desc='Competitve Programming is quite famous among coding geeks. Here you will find a lot of resources regarding competitive programming.' />
                                        <ResourceCard title='CP Algorithms' url='https://cp-algorithms.com/' desc='Master competitive programming algorithms and unleash your coding potential with the CP Algorithms guide.' />
                                        <ResourceCard title='USACO Guide' url='https://usaco.guide/' desc='Embrace the power of the USACO Guide to level up your problem-solving skills and excel in competitive programming.' />
                                        <ResourceCard title="Graph's Playlist" url='https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn' desc='Graphs are as important as other data structures. So, here you will find the graph series by Striver. Enjoy the playing with the graphs.' />
                                        <ResourceCard title="DP's Playlist" url='https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY' desc='Master dynamic programming concepts & problems with concise videos, pseudocode, and notes. Ace DP in any coding language' />
                                        <ResourceCard title="Striver's SDE sheet" url='https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/' desc='SDE Sheet: Handpicked coding interview questions from top companies like Amazon, Microsoft, Flipkart. Covers all DSA concepts.' />
                                        <ResourceCard title="Advanced Practice" url='https://cses.fi/problemset/' desc='Embark on a coding adventure with CSES Problem Set - an exhilarating resource to enhance your problem-solving prowess through engaging challenges' />
                                        <ResourceCard title="Other Resources" url='https://docs.google.com/document/d/1sANWGH1fC-AMFhKHr0qIvTZ5f-V0wD0P64F2uQ8fGD0/edit' desc='These resources are currently under development, and ongoing research is being conducted to discover more similar content.' />
                                    </div>
                                </div>
                                :
                                (
                                    (active === 2)
                                        ?
                                        <div className={(active === 2) ? 'show' : ''}>
                                            {/* <h3>Development related guidance plans</h3> */}
                                            <div className='resource__card__wrapper'>
                                                <ResourceCard title="Intro to dev" url='https://medium.com/javarevisited/intro-to-modern-web-development-d714563c87e' desc='Before starting something, you should know what you are going to learn. In this blog, you will get all insights about development.' />
                                                <ResourceCard title="Start from Basics" url='https://www.w3schools.com/' desc="You just can't bypass the basics in your learning untill you have prior experience. Start from here to make your basics strong." />
                                                <ResourceCard title="JavaScript (Beginners)" url='https://youtu.be/lI1ae4REbFM' desc="You had surely heard the term JavaScript. What it is and how to learn it? Why don't you follow this resource to get into JavaScript." />
                                                <ResourceCard title="React-Js Playlist (Beginners)" url='https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt' desc="If you don't know, React is one of the most in-demand JavaScript library in the IT industry with application development perspective." />
                                                <ResourceCard title="Lean with Implementation" url='https://www.freecodecamp.org/learn/2022/responsive-web-design/' desc="Unleash your web development skills with Freecodecamp's website - a captivating resource for hands-on learning and implementation." />
                                                <ResourceCard title="JavaScript (Advanced)" url='https://javascript30.com/' desc="Advance applications need advance JavaScript. If you have completed the basics of JavaScript, go for this one to excel in development." />
                                                <ResourceCard title="React-Js (DOCS)" url='https://react.dev/learn' desc="Just on some saying or article, you can't rely. You will definitely need the documentation itself. Here's the required documentation of React-Js." />
                                                <ResourceCard title="Other Resources" url='https://docs.google.com/document/d/1rZQN_QGfcPEwaPGoePZMnOi3n_OrHyNLFMVNAhjlwsU/' desc='These resources are currently under development, and ongoing research is being conducted to discover more similar content.' />
                                            </div>
                                        </div>
                                        :
                                        (active === 3)
                                            ?
                                            <div className={(active === 3) ? 'show' : ''}>
                                                {/* <h3>ML/Data Science related guidance and plans</h3> */}
                                                <div className='resource__card__wrapper'>
                                                    <ResourceCard title="Stats & Probablity (CS110)" url='https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo' desc='Stats and Probability are fundamental for Machine Learning, forming the bedrock of algorithmic understanding.' />
                                                    <ResourceCard title="Python" url='https://www.youtube.com/watch?v=LHBE6Q9XlzI' desc='These resources are currently under development, and ongoing research is being conducted to discover more similar content.' />
                                                    <ResourceCard title="ML Full Course (CS229)" url='https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU' desc="CS229, Andrew Ng's ML course, covers fundamental ML concepts with mathematical rigor, providing a solid foundation." />
                                                    <ResourceCard title="Deep Learning (CS230)" url='https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb' desc='Why to stop after learning ML? Go for Deep Learning too. CS230 by Stanford University will help you move further in Deep Learning.' />
                                                    <ResourceCard title="Other Resources" url='https://docs.google.com/document/d/17F12gRKaKXjir-SoSwv2P8sEnEuYmKfT8sDSiyMfC3E/' desc='These resources are currently under development, and ongoing research is being conducted to discover more similar content.' />
                                                </div>
                                            </div>
                                            :
                                            <div className={(active === 4) ? 'show' : ''}>
                                                {/* <h3>Cybersecurity related resources and guidance plans</h3> */}
                                                <div className='resource__card__wrapper'>
                                                    <ResourceCard title='Linux' url='https://www.linux.org/' desc='Get all learnings and insignts about Linux Systems as Linux is the most used operating system all over the world for servers and it has also a lot of handsome job roles.' />
                                                    <ResourceCard title='Computer Networking' url='https://www.youtube.com/playlist?list=PLPXEBNfIeLdkQGjcWUQIB7rAxqxdT91dg' desc='Computer Networking and security is important because it keeps sensitive data safe from cyber attacks and ensures the network is usable and trustworthy.' />
                                                    <ResourceCard title='TryHackMe Roadmap' url='https://drive.google.com/file/d/1w0ckGRSLUCMAXPFYlj4gEj5UTnJbNHIV/view?usp=sharing' desc='Here you will get a detailed roadmap of labs/rooms to solve to get practical insights on the penetration testing in all domains so that the knowledge can be applied in real life.' />
                                                    <ResourceCard title='VulnHub Roadmap' url='https://drive.google.com/file/d/1LkMZTqrMFuTTn3Ac350DW-bye2N-JY8_/view?usp=sharing' desc='How will you feel if you get labs designed by experts? Here is a roadmap of VulnHub machines in an uplifting order to enhace the practical knowledge.' />
                                                    <ResourceCard title='List of YouTube channels' url='https://docs.google.com/document/d/1lI1DAb4wyIvDQEGQQnwjwmJS1-CoiSOKpTuUwQyd-Jo/edit?usp=sharing' desc='A list of top YouTube channels from where you can learn cybersecurity and these youtubers are having an expertise in the respective field.' />
                                                    <ResourceCard title='Honeypots' url='https://drive.google.com/file/d/1EWKQr8GBDPcRBz5WzySblLLT9b3tKqY5/view?usp=sharing' desc='The purpose of a honeypot is to refine an organizations intrusion detection system and threat response so it is in a better position to manage and prevent attacks.' />
                                                    <ResourceCard title='Free Udemy Courses' url='https://docs.google.com/document/d/1JONxn24XvsXbiZva13poNlSlYB_-j7kZCtw_UeBvOc4/edit?usp=sharing' desc='We all know that all the resources are available on internet for free. Here is the list of cybersecurity courses which are free of cost.' />
                                                    <ResourceCard title='OSINT' url='https://docs.google.com/document/d/1aJ3mTiazcATNLH_xMYIiHBIIFFh38ewSoYmMF1cE9ds/edit?usp=sharing' desc='OSINT stands for open-source intelligence, is a process to gather information from public sources. These sources may be government databases, websites, brochures, etc.' />
                                                    <ResourceCard title='OSCP short notes' url='https://drive.google.com/file/d/1C1evRtyNO-N72PVc-UsroTGUGdmQbUj5/view?usp=sharing' desc='OSCP is an ethical hacking certification offered by Offensive Security. Holding this certification validates a professionals knowledge of penetration testing using tools inherent in the Kali Linux distribution.' />
                                                    <ResourceCard title='Relevant Docker Images' url='https://docs.google.com/document/d/1N0sGPHpJMJFNlbpTnj-_hU-XdbbqV1v_Wy285odIq2M/edit?usp=sharing' desc='A Docker image is a read-only template that contains a set of instructions for creating a container that can run on the Docker platform. These are some security relevant images.' />
                                                    <ResourceCard title='Social Media Investigation' url='https://drive.google.com/file/d/1F5p2BqKiPIZ6lTAOSKOBP8cGt0oZ7C4h/view?usp=sharing' desc='Social Media investigation can be used to investigate a personal injury incident, gather evidence in insurance fraud cases, and even be used for comprehensive background checks to ensure user safety.' />
                                                    <ResourceCard title='Bug Bounty Roadmap' url='https://drive.google.com/file/d/1PH60SCUdUmI7g5ptUdwpQEYHBDDPrTlo/view?usp=sharing' desc='Anyone who is learning cybersecurity and have not heard of Bug Bounty? We dont believe. So, Here is a complete roadmap of the bug bounty for beginners who have interest in this domain.' />
                                                    <ResourceCard title='Other Resources' url='https://docs.google.com/document/d/1snywWNtOnmE6iZ-BySpFXwE5UrjnZmW-CMuQFHN9ryU/edit?usp=sharing' desc='This is a list of other resources regarding the same. This list is dynamic and will be getting updated with time.' />
                                                </div>
                                            </div>
                                )}
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </div >
    )
}

export default Explore