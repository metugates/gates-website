import React, { Component } from 'react';
import './contact.css'
class Contact extends Component {

    render()
    {
        return (
            <div className="contact">
              <h1>İletişim</h1>
              <ul>
                <li><a href="https://www.facebook.com/metugates"><img src="http://katiepellegrinphotography.com/wp-content/uploads/2017/11/facebook-logo-png.png"/></a></li>
                <li><a href="https://www.instagram.com/metugates/"><img src="https://www.shareicon.net/download/2016/07/09/118293_instagram_512x512.png"/></a></li>
                <li><a href="https://twitter.com/metugates"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_gray-512.png"/></a></li>
              <li><a href="mailto:metugates@gmail.com"><img src="https://adventurebikehire.co.nz/wp-content/uploads/2018/01/Mail-Icon-White-on-Grey-300x300.png"/></a></li>

              </ul>
            </div>
        )
    }
}

export default Contact;
