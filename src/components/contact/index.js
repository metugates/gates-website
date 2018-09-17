import React, { Component } from 'react';
import './contact.css'
class Contact extends Component {

    render()
    {
        return (
            <div className="contact">
              <h1>İletişim</h1>
              <ul className="contactLinks">
                <li><a href="https://www.facebook.com/metugates"><img src="/img/facebook-logo.png" alt="" /></a></li>
                <li><a href="https://www.instagram.com/metugates/"><img src="/img/instagram-logo.png" alt="" /></a></li>
                <li><a href="https://twitter.com/metugates"><img src="/img/twitter-logo.png" alt="" /></a></li>
                <li><a href="mailto:metugates@gmail.com"><img src="/img/mail-logo.png" alt="" /></a></li>
              </ul>
            </div>
        )
    }
}

export default Contact;
