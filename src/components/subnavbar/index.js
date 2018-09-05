import React, { Component } from 'react';
import './subnavbar.css';

class SubNavbar extends Component {
    render()
    {
        return (
            <div className="subnavbar">
                <ul className="subnavbar-buttons">
                    <li>Oyun Programlama</li>
                    <li>Dijital Sanatlar</li>
                    <li>Hikaye Anlatımı</li>
                    <li>Müzik ve Ses Efektleri</li>
                    <li>Pazarlama</li>
                </ul>
            </div>
        )
    }
}

export default SubNavbar;
