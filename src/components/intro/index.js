import React, { Component } from 'react';
import './intro.css';

class Introduction extends Component {


  render(){
    return (
      <div className="introduction">
        <div className="intro-text">
            <h2> ODTÜ Oyun Geliştirme ve Animasyon Topluluğu</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum metus est, mattis iaculis est luctus non. Phasellus et quam a risus luctus consequat eu vel odio. Suspendisse sit amet rutrum lorem. In id pretium purus. Cras ac quam vulputate, vestibulum elit ut, sollicitudin quam. Nulla iaculis sem felis. Aenean dui dolor, semper id nisl non, condimentum dignissim nisl. Ut neque nisi, blandit vel dolor a, fermentum dictum turpis. Mauris porta libero eu tincidunt pharetra. Phasellus vel felis malesuada, ultricies ex ac, aliquet diam. Maecenas vulputate aliquam dolor, et porttitor ante fringilla dignissim. Aliquam eu condimentum dui. Donec at pellentesque tortor, vitae fringilla tortor.
            </p>
            <p>
              Maecenas fringilla faucibus tristique. Nam eget sapien ac nisl porta viverra eu quis nunc. Nunc ut ligula cursus, facilisis ante vitae, tincidunt tortor. In placerat vestibulum metus ac viverra. Pellentesque vitae felis eu purus venenatis sollicitudin. Sed orci arcu, gravida at volutpat vitae, vestibulum nec dolor. Nulla eros augue, accumsan at urna vel, cursus ultrices orci. Suspendisse congue justo eget interdum ullamcorper. Cras eget risus vitae massa finibus lobortis. Pellentesque hendrerit ante ac sapien tempor, vitae faucibus mi consectetur. Phasellus ac dolor justo. Vivamus vitae feugiat augue. Suspendisse tincidunt purus vel diam congue, in sagittis lacus ornare. Pellentesque in scelerisque arcu. In sit amet leo quis dui dapibus condimentum consectetur sit amet ipsum. Praesent eu tempor tortor.
            </p>
        </div>
        <h2>İlgi Alanlarımız</h2>
        <div className="sections">
          <div className="gatesSection">
            <h3>Oyun Programlama</h3>
            <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cs.cmu.edu%2F~239%2Fimages%2Ftechcafe-games%2Fgame.png&f=1"/>
          </div>
          <div className="gatesSection">
            <h3>Dijital Sanatlar</h3>
            <img src="http://4.bp.blogspot.com/-ksODNBcW4NI/U2LmLs2ZF5I/AAAAAAAACBU/tC_Zv3-KaFw/s1600/Pen%2BTool.png"/>
          </div>
          <div className="gatesSection">
            <h3>Hikaye Anlatımı</h3>
            <img src="https://vignette.wikia.nocookie.net/clubpenguin/images/e/e0/Film_Script_clothing_icon_ID_5211.png/revision/latest?cb=20130214161157"/>
          </div>
          <div className="gatesSection">
            <h3>Müzik ve Ses Efektleri</h3>
            <img src="https://images.vexels.com/media/users/3/145866/isolated/preview/b4efb6c6682b2a808631bf8fbd96d015-sound-wave-icon-by-vexels.png"/>
          </div>
          <div className="gatesSection">
            <h3>Pazarlama</h3>
            <img src="https://png.icons8.com/ios/1600/combo-chart.png"/>
          </div>
        </div>
      </div>

    );
  }
}

export default Introduction;
