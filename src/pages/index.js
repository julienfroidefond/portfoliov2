import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/profile.jpeg'
import cdiscountPic from '../assets/images/cdiscountCrop.png'
import apth from '../assets/images/apth.jpg'
import calixx from '../assets/images/calixx-p.jpg'
import odeesa from '../assets/images/odeesa-p.jpg'
import wax from '../assets/images/wax-p.jpg'

import cv from '../assets/CV_JFR.pdf'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
          <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ma vision</h2>
                </header>
                <p>Passionné par mon métier, je sais mettre en cohérence talent, 
                outil technologique, savoir faire et personnalité. <br /><br />
                Agé de 37 ans, mes passions et mes compétences me conduisent à être moteur,
                ancré dans les technologies émergentes et l’innovation.</p>
                <ul className="actions">
                  <li><a href={cv} target="_blank" className="button">Télécharger CV</a></li>
                </ul>
              </div>
              <span className="image"><img style={{height: '170px',width: '170px', opacity: 0.9}} src="http://res.cloudinary.com/dpcocrdyl/image/upload/c_crop,h_292,w_292/v1524759672/profile_bdqcl8.jpg" alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Web development</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fas fa-code"></span>
                <h3>Modern Web-development</h3>
                <p>
                  Webpack, NPM, Babel, Typescript, Sass, autant d'outils front-end 
                  aujourd'hui accessibles et autant de possibilités de créer un processus 
                  totalement adapté et sur-mesure. Toujours mieux, toujours plus loin.
                </p>
              </li>
              <li>
                <span className="icon major style3 fab fa-js"></span>
                <h3>JS Addict</h3>
                <p>Mon premier et dernier coup de coeur du Web. ES6 modernise et revoie 
                  ce langage qui nous accompagne depuis le début du web. 
                  Nodejs a définitivement fait passer JS dans une autre dimension.
                </p>
              </li>
              <li>
                <span className="icon major style5 fas fa-gem"></span>
                <h3>Passionate, sociability and innovation</h3>
                <p>
                Ma passion réside dans l'évolution technologique que nous vivons depuis une dizaine d'années. 
                En être acteur est mon but. Mais sans les développeurs, il n'en serait rien. 
                L'équipe et les personnes sont au coeur de ma sensibilité.
                </p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Techs</h2>
              {/* <p>Les technologies</p> */}
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fab fa-react"></span>
                <strong>Re</strong> React js
              </li>
              <li className="style2">
                <span className="icon fab fa-angular"></span>
                <strong>Ng</strong> Angular
              </li>
              <li className="style3">
                <span className="icon fab fa-node-js"></span>
                <strong>No</strong> Nodejs
              </li>
              <li className="style4">
                <span className="icon fab fa-git"></span>
                <strong>Gi</strong> Git
              </li>
              <li className="style5">
                <span className="icon fab fa-html5"></span>
                <strong>Ht</strong> Html 5
              </li>
            </ul>
            <p className="content">
              Mon expertise est aujourd'hui en grande partie sur l'écosystème javascript.&nbsp;
              <strong>ReactJs</strong> est le framework que je plébiscite le plus. Le couplage avec <strong>Redux et saga</strong> forme une plateforme robuste, testable. &nbsp;
              <strong>Angular</strong> reste très compétitif, et là où React est une plateforme ultra modulaire, Angular procure une stack complète, solide, orientée entreprise.&nbsp;
              <strong>Node JS</strong> coté serveur amène toute la stack à être full Js aujourd'hui.&nbsp;
              <strong>Git</strong> reste l'outil de controle de code source incontournable.&nbsp;
              <strong>Html5</strong> reste le langage de markup de base et fait partie inexorablement de la stack front-end.&nbsp;
            </p>
            {/* <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer> */}
          </section>

           <section id="third" className="main special">
            <header className="major">
              <h2>Quelques projets</h2>
              <p>
                Ci-dessous quelques projets marquants.
              </p>
              <ul className="features">
                <li>
                  <span className="image">
                    <img style={{maxWidth:250}} src={cdiscountPic} />
                  </span>
                  <h3><b>Cdiscount</b></h3>
                  <p>
                    En tant que responsable technique, je suis actuellement en charge 
                    de la qualité et la performance des applications Front CDiscount.<br/>
                    <i>L'application native est en React Native et le portage mobile est en ReactJs</i>
                    
                  </p>
                </li>
                <li>
                  <span className="image">
                    <img style={{maxWidth:250}} src={apth} />
                  </span>
                  <h3><b>APTH</b></h3>
                  <p>
                    Développement full stack d'une application de visualisation de réseau de bus.<br/>
                    <i>Back end en Drupal 8, front en jQuery/mustache</i>
                  </p>
                </li>
                <li>
                  <span className="image">
                    <img style={{maxWidth:250}} src={calixx} />
                  </span>
                  <h3><b>Calixx</b></h3>
                  <p>
                    Développement full stack d'un portail d'application.<br/>
                    <i>Back end en Symfony, front en jQuery</i>
                  </p>
                </li>
                <li>
                  <span className="image">
                    <img style={{maxWidth:250}} src={odeesa} />
                  </span>
                  <h3><b>Odeesa</b></h3>
                  <p>
                    Développement full stack d'un site de gestion d'événement.<br/>
                    <i>Back end en Symfony, front en jQuery</i>
                  </p>
                </li>
                <li>
                  <span className="image">
                    <img style={{maxWidth:250}} src={wax} />
                  </span>
                  <h3><b>Wax</b></h3>
                  <p>
                    Développement en MeteorJs / AngularJs d'un site de soumission d'idées innovantes avec système de votes.
                  </p>
                </li>
              </ul>
              
            </header>
            {/*<footer className="major">
              <ul className="actions">
                <li><Link to="#cta" className="button special">Coming soon</Link></li>
                 <li><Link to="/generic" className="button">Learn More</Link></li> 
              </ul>
            </footer>*/}
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
