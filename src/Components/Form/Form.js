import React from 'react';
import './Form.css';


function Register() {
    return (
        <div className='form__body'>
            <div className="form__container">
                <div className="form__title">
                    <h1>Register Here</h1>
                </div>
                <div className="form__panel">
                    <input type="text" name="first_name" required placeholder="First Name"></input>
                    <input type="text" name="last_name" required placeholder="Last Name"></input>
                    <input type="text" name="linkedin" placeholder="LinkedIn Id"></input>
                    <input type="text" name="github" placeholder="Github Id"></input>

                    <div className="member_type">
                        <label htmlFor="position"><p>Member Type :</p></label>
                        <select name="position" id="position">
                            <option value="member">Member</option>
                            <option value="core">Core Member</option>
                        </select>
                    </div>

                    <div className="upload_img">
                        <label htmlFor="img"><p>Upload your image :</p></label>
                        <input type="file" name="img" id="img" accept="image/*"></input>
                    </div>
                </div>
                <div className="buttons">
                    <button type="submit" class="btn"> Submit</button>
                    <button type="reset" class="btn">Reset</button>
                </div>
            </div>
        </div>
    );
}
export default Register;