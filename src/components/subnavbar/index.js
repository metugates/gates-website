import React, { Component } from 'react';
import './subnavbar.css';

class SubNavbar extends Component {
    render()
    {
        return (
            <div className="subnavbar">
                <ul className="subnavbar-buttons">
                    <li><a href="#oyun-programlama">Oyun Programlama</a></li>
                    <li><a href="#dijital-sanatlar">Dijital Sanatlar</a></li>
                    <li><a href="#hikaye-anlatimi">Hikaye Anlatımı</a></li>
                    <li><a href="#muzik-ses-efektleri">Müzik ve Ses Efektleri</a></li>
                    <li><a href="#pazarlama">Pazarlama</a></li>
                </ul>
            </div>
        )
    }
}

export default SubNavbar;
