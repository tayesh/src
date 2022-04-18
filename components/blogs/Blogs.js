import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <div className='text-start mx-5'>
                <div>
                    <h4># Difference between authorization and authentication</h4>
                    <h5>Authentication</h5>
                    <p>Authentication verifies who the user is.It works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                        That's why we can say it is the first step of a good identity and access management process also it is visible to and partially changeable by the user.</p>

                    <h5>Authorization</h5>
                    <p>On the other hand authorization determines what resources a user can access.It works through settings that are implemented and maintained by the organization.
                        That's the reason authorization always takes place after authentication and authorization isn’t visible to or changeable by the user.</p>
                </div>
                <div>
                    <h4> # Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.
                        And if you want to use a pre-built authentication UI, you have it at your disposal as well.</p>
                    <p>There are more alternatives of fire base </p>
                    <ul>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>Awm Amplify..(etc)</li>
                    </ul>
                </div>
                <div>
                    <h4># What other services does firebase provide other than authentication?</h4>
                    <ol>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li> Remote Config</li>
                    </ol>

                </div>
            </div>
        </div>
    );
};

export default Blogs;