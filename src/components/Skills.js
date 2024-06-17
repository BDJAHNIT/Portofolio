import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p> <ul>
                <li>Git - Gestion de versions et collaboration en équipe</li>
                <li>HTML & CSS - Construction et stylisation de pages web</li>
                <li>JavaScript - Création d'interactions dynamiques sur le web</li>
                <li>React - Développement d'interfaces utilisateur modernes et réactives</li>
                <li>Next.js - Développement d'interfaces utilisateur modernes et réactives</li>
                <li>Node.js - Développement de serveurs et d'APIs backend</li>
                <li>SQL & NoSQL Databases - Gestion et manipulation de données</li>
                <li>Responsive Design - Conception de sites web adaptatifs pour tous les appareils</li>
                <li>Test Unitaire - Assurance de la qualité et détection précoce des bugs</li>
                <li>DevOps - Intégration et déploiement continus</li>
              </ul></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Developement web</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Accessibilité</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Backend</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
