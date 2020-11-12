import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleClick = (e) => {
        e.preventDefault();
        window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }


    return (
        <section id="contact">
            <h1>Get In Touch.</h1>
            <hr/>


         
            <form id="contactForm" name="contactForm">

                <div>
                    <label htmlFor="contactName">Name </label>
                </div>
                <div>
                    <input value={name} type="text" defaultValue="" size="45"id="contactName" name="contactName" onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="contactEmail">Email </label>
                </div>
                <div>
                    <input value={email} type="text" defaultValue="" size="45"id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="contactSubject">Subject</label>
                </div>
                <div>
                    <input value={subject} type="text" defaultValue="" size="45"id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="contactMessage">Message</label>
                </div>
                <div>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows="5" cols="45"  id="contactMessage" name="contactMessage"></textarea>
                </div>

                <div>
                    <button type='submit' onClick={handleClick} className="submit">Submit</button>
                    <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                    </span>
                </div>

            </form>

            {/* </div> */}
        </section>
    )
}

export default Contact;