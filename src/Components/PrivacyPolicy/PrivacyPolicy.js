import React from 'react'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
    return (
        <div className='policy__container'>
            <h2>Privacy Policy (SSDC)</h2>
            <p className='policy__para'>This Privacy Policy applies to the personal information that is collected when you use our login form. We understand the importance of protecting your personal information and we are committed to respecting your privacy. By using our login form, you are accepting the terms of this Privacy Policy and consenting to our collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>

            <h3 className='policy__subheading'>Information We Collect</h3>
            <p className='policy__para'>When you use our login form, we may collect the following types of personal information:</p>
            <ul>
                <li>Contact information, such as your name and email address</li>
                <li>Account information, such as your username and password</li>
                <li>Profile information, such as your profile picture, description, and location</li>
            </ul>

            <h3 className='policy__subheading'>Use of Information</h3>
            <p className='policy__para'>We may use the information we collect to:</p>
            <ul>
                <li>Verify your identity when you log in to your account</li>
                <li>Send you updates and important information about your account</li>
                <li>Improve our login form and develop new features and services</li>
                <li>Customize your experience on our website</li>
                <li>Analyze and understand user behavior to improve our services</li>
            </ul>

            <h3 className='policy__subheading'>Disclosure of Information</h3>
            <p className='policy__para'>We will not disclose your personal information to third parties without your consent, except as required by law or to protect the rights and safety of our users or others.</p>
            <p className='policy__para'>We may share your personal information with third-party service providers who assist us in providing our services, such as hosting providers, analytics providers, and payment processors. These third-party service providers are bound by strict confidentiality agreements and are only allowed to use your personal information as necessary to provide their services to us.</p>
            <p className='policy__para'>We may also disclose your personal information as required by law, such as in response to a subpoena or court order.</p>

            <h3 className='policy__subheading'>Data Security</h3>
            <p className='policy__para'>We take the security of your personal information seriously and take appropriate measures to protect it. We use industry-standard security technologies and procedures to protect your personal information from unauthorized access, use, or disclosure. We use encryption and secure socket layer (SSL) technology to protect the transmission of your personal information to and from our website. We also use firewalls and intrusion detection systems to protect our servers from unauthorized access.</p>

            <h3 className='policy__subheading'>Your Rights</h3>
            <p className='policy__para'>You have the right to access and control your personal information that we collect through our login form. You may request access to your personal information by contacting us at the contact information provided in this Privacy Policy. You also have the right to request that we correct any inaccuracies in your personal information, and you may request that we delete your personal information from our records. However, please note that we may be required to retain certain information as required by law.</p>

            <h3 className='policy__subheading'>Changes to this Privacy Policy</h3>
            <p className='policy__para'>We may update this Privacy Policy from time to time, and we will post any changes on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal information.</p>

            <h3 className='policy__subheading'>Contact Us</h3>
            <p className='policy__para'>If you have any questions or concerns about this Privacy Policy or our collection, use, or disclosure of your personal information, please contact us at {`sliet.ssdc@gmail.com`}.</p>
        </div>
    )
}

export default PrivacyPolicy
