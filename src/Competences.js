import React from 'react';
import Navbar from './Navbar';
import './App.css';


function Competences() {
    
    
  const H2Style = { textAlign: "center" };
  const HrStyle = { margin: "0", marginBottom: "60px" };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2 style={H2Style}>
            Titre
          </h2>
          <p style={H2Style}>
            Donec id elit non mi porta gravida at eget metus...
          </p>
          <div className="animation-trigger">
            <div className="row">
              <div className="col-md-12">
                <div className="bounce-top scroll-animation">
                  <img style={{ display: "block", width: "100%" }} alt="séparation de la page" src="pictures/centre.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="b" id="competencesSection">
        <hr className="featurette-divider12" style={HrStyle} />
        

        <h2 style={H2Style}>
          COMPÉTENCES
        </h2>

        <div className="row imagesCompetences" style={{ marginBottom: "100px" }}>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/html.png" />
            <h2 style={H2Style}>
              HTML
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/css.png" />
            <h2 style={H2Style}>
              CSS
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/js.png" />
            <h2 style={H2Style}>
              JS
            </h2>
          </div>
          <div className="col-md-4">
            <img src="pictures/competences/react.png" />
            <h2 style={H2Style}>
              ReactJs
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/serveur-sql.png" />
            <h2 style={H2Style}>
              SQL
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/java.png" />
            <h2 style={H2Style}>
              JAVA
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/git..png" />
            <h2 style={H2Style}>
              Git
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/github-logo.png" />
            <h2 style={H2Style}>
              GitHub
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/ccna.png" />
            <h2 style={H2Style}>
              CCNA1
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/wordpress.png" />
            <h2 style={H2Style}>
              Wordpress
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/figma.png" />
            <h2 style={H2Style}>
              Figma
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/canva.png" />
            <h2 style={H2Style}>
              Canva
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/photoshop.png" />
            <h2 style={H2Style}>
              Photoshop
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/adobe-illustrator.png" />
            <h2 style={H2Style}>
              Adobe-illustrartor
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/indesign.png" />
            <h2 style={H2Style}>
              Indesign
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/excel.png" />
            <h2 style={H2Style}>
              Excel
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/power-point.png" />
            <h2 style={H2Style}>
              PowerPoint
            </h2>
          </div>
          <div className="col-md-4">
            <img alt="Aperçu de l'image Bootstrap" src="pictures/competences/word.png" />
            <h2 style={H2Style}>
              Word
            </h2>
          </div>
          
          
          
        </div>
      </section>
    </div>
  );
}

export default Competences;
