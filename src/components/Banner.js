import { useState, useEffect } from "react"; // importer useState, useEffect
import { Container, Row, Col } from "react-bootstrap"; // importer Container, Row, Col de react-bootstrap
import headerImg from "../assets/img/header-img.svg"; // importer l'image header-img.svg
import { ArrowRightCircle } from 'react-bootstrap-icons'; // importer react-bootstrap-icons
import 'animate.css'; // importer animate.css
import TrackVisibility from 'react-on-screen'; // importer react-on-screen
import { Contact } from './Contact'; // importer le composant Contact

export const Banner = () => { // créer le composant Banner
  const [loopNum, setLoopNum] = useState(0); // initialiser loopNum à 0
  const [isDeleting, setIsDeleting] = useState(false); // initialiser isDeleting à false
  const [text, setText] = useState(''); // initialiser text à ''
  const [delta, setDelta] = useState(300 - Math.random() * 100); // initialiser delta à 300 - Math.random() * 100
  const [index, setIndex] = useState(1); // initialiser index à 1
  const toRotate = [ "Développeur web", "Web Full Stack", "Web Accessibilité" ]; // définir to Rotate
  const period = 2000; // définir periode

  useEffect(() => { // créer un effet
    let ticker = setInterval(() => { // initialiser ticker à setInterval
      tick(); // appeler la fonction tick
    }, delta); // delta

    return () => { clearInterval(ticker) }; // retourner clearInterval(ticker)
  }, [text]) // text

  const tick = () => { // créer la fonction tick
    let i = loopNum % toRotate.length; // initialiser i à loopNum % toRotate.length
    let fullText = toRotate[i]; // initialiser fullText à toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1); // initialiser updatedText

    setText(updatedText); // setText(updatedText)

    if (isDeleting) { // si isDeleting
      setDelta(prevDelta => prevDelta / 2); // setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) { // si !isDeleting && updatedText === fullText
      setIsDeleting(true); // setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1); // setIndex(prevIndex => prevIndex - 1)
      setDelta(period); // setDelta(period)
    } else if (isDeleting && updatedText === '') { // sinon si isDeleting && updatedText === ''
      setIsDeleting(false); // setIsDeleting(false)
      setLoopNum(loopNum + 1); // setLoopNum(loopNum + 1)
      setIndex(1); // setIndex(1)
      setDelta(500); // setDelta(500)
    } else { // sinon
      setIndex(prevIndex => prevIndex + 1); // setIndex(prevIndex => prevIndex + 1)
    }
  }

  return ( // retourner
    <section className="banner" id="home"> 
      <Container> 
        <Row className="aligh-items-center"> 
          <Col xs={12} md={6} xl={7}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                <span className="tagline">Bienvenue dans mon Portfolio</span> 
                <h1>{`Bonjour ! je suis Badreddine`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Développeur Web", "Web Full stack", "Web Accessibilité" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Après une expérience de 14 ans en tant qu’employé chez Auchan dans plusieurs
                    postes, j’ai décidé d’entreprendre une reconversion professionnelle pour devenir
                    développeur web avec spécialisation en accessibilité. Curieux de nature, je suis
                    animé par l'idée d'apprendre en continu et de développer mes compétences.</p>
                  <button onClick={() => console.log('connect')}>Contacter <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
