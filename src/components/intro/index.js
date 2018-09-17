import React, { Component } from 'react';
import './intro.css';

class Introduction extends Component {


  render(){
    return (
      <div className="introduction">
        <div className="intro-text">
            <h2> ODTÜ Oyun Geliştirme ve Animasyon Topluluğu</h2>
            <p>
                Selamlar, ODTÜ Oyun Geliştirme ve Animasyon Topluluğu (veya METU GATES) oyun geliştirme ve animasyonun tüm alt disiplinlerini bir araya getirmeyi amaçlayan bir öğrenci topluluğudur. (oyun programlama, dijital sanatlar, hikaye anlatımı, müzik, pazarlama vb.) ODTÜ Kültür İşleri'ne resmi bir topluluk olmak için başvurusunu yapmış olup 2018 yazından beri çeşitli eğitimler ve projelerle aktif faaliyet göstermektedir.
            </p>
            <p>
                Topluluğumuzun temel üç amacı:
                <ul>
                    <li>ODTÜ içerisinde profesyonel/yarı profesyonel oyun geliştirme ve animasyonun alt disiplinlerinde çalışan öğrencileri bir çatı altında toplayıp yardımlaşma, bilgi/proje paylaşımını arttırmak.</li>
                    <li>Bu konularda meraklı öğrencilere yol gösterebilmek ve bilgi aktarımı sağlamak.</li>
                    <li>Üreterek, oyun geliştirmeye ve animasyon yapımına olan ilgiyi arttırmak.</li>
                </ul>

                Eğer siz de bu alanlarda üretim yapıyorsanız, yapmak istiyorsanız gelin birlikte çalışalım!
            </p>
        </div>
        <h2>İlgi Alanlarımız</h2>
        <div className="sections">
          <div className="gatesSection" id="oyun-programlama">
            <h3>Oyun Programlama</h3>
            <div className="section-inner">
                <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cs.cmu.edu%2F~239%2Fimages%2Ftechcafe-games%2Fgame.png&f=1" alt="" />
                <p>Oyun mekanikleri, oynanış, oyun motorları vb. şeylerle ilgilenir.</p>
            </div>
          </div>
          <div className="gatesSection" id="dijital-sanatlar">
              <h3>Dijital Sanatlar</h3>
              <div className="section-inner">
                <p>Animasyon, arayüz tasarımı, çizim vb. şeylerle ilgilenir.</p>
                <img src="http://4.bp.blogspot.com/-ksODNBcW4NI/U2LmLs2ZF5I/AAAAAAAACBU/tC_Zv3-KaFw/s1600/Pen%2BTool.png" alt="" />
            </div>
          </div>
          <div className="gatesSection" id="hikaye-anlatimi">
            <h3>Hikaye Anlatımı</h3>
              <div className="section-inner">
                <img src="https://vignette.wikia.nocookie.net/clubpenguin/images/e/e0/Film_Script_clothing_icon_ID_5211.png/revision/latest?cb=20130214161157" alt="" />
                <p>Oyunlar için en önemli parçalardan olan hikaye anlatımı ile ilgilenir.</p>
              </div>
          </div>
          <div className="gatesSection" id="muzik-ses-efektleri">
            <h3>Müzik ve Ses Efektleri</h3>
            <div className="section-inner">
                <p>Hem oyun hem de animasyonlar için çok önemli bir element olan müzik ve ses efeklerinin yapımı, düzenlenmesi vb. ile ilgilenir.</p>
            <img src="https://images.vexels.com/media/users/3/145866/isolated/preview/b4efb6c6682b2a808631bf8fbd96d015-sound-wave-icon-by-vexels.png" alt="" />
            </div>
          </div>
          <div className="gatesSection" id="pazarlama">
            <h3>Pazarlama</h3>
            <div className="section-inner">
            <img src="https://png.icons8.com/ios/1600/combo-chart.png" alt="" />
            <p>Çıkarılan ürünün kullanıcılara ilgi çekici bir şekilde sunulması ile ilgilenir.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Introduction;
