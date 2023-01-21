import React from 'react'
import './Form.css'

function Form() {
    return (
        // <div class="main-block">
        //     <div class="left-part">
        //         <i class="fas fa-graduation-cap"></i>
        //         <h1>Welcome to SSDC Web Portal</h1>
        //         <p>From here you can apply for various roles in the SLIET Software Developement Club</p>
        //         <div class="btn-group">
        //             <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
        //             <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a>
        //         </div>
        //     </div>
        //     <form action="/">
        //         <div class="title">
        //             <i class="fas fa-pencil-alt"></i>
        //             <h2>Register here</h2>
        //         </div>
        //         <div class="info">
        //             <input class="fname" type="text" name="name" placeholder="First Name" />
        //             <input class="lname" type="text" name="name" placeholder="Last Name" />
        //             <input type="text" name="name" placeholder="Email" />
        //             <input type="text" name="name" placeholder="Phone number" />
        //             <select>
        //                 <option value="position" selected>Position*</option>
        //                 <option value="member">Member</option>
        //                 <option value="core">Core Team</option>
        //             </select>
        //         </div>
        //         <div class="checkbox">
        //             <input type="checkbox" name="checkbox" /><span>I agree to the <a>Privacy Policy</a></span>
        //         </div>
        //         <button type="submit" href="/">Submit</button>
        //     </form>
        // </div>
        <div className='form__container'>
            <div className='form__left'>
                <h1>Welcome to SSDC Web Portal</h1>
                <p>From here you can apply for various roles in the SLIET Software Developement Club</p>
            </div>
            <div className='form__right'>
                <form>
                    <div className='form__title'>
                        <h2>Register Here</h2>
                    </div>
                    <div class="form__info">
                        <input class="fname" type="text" name="name" placeholder="First Name" />
                        <input class="lname" type="text" name="name" placeholder="Last Name" />
                        <input type="text" name="name" placeholder="Email" />
                        <input type="text" name="name" placeholder="Phone number" />
                        <select>
                            <option value="position" selected>Position*</option>
                            <option value="member">Member</option>
                            <option value="core">Core Team</option>
                        </select>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="checkbox" /><span>I agree to the <a>Privacy Policy</a></span>
                    </div>
                    <button type="submit" href="/">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form
