import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/logo2.jpeg";
import projImg2 from "../assets/img/logo2.jpeg";
import projImg3 from "../assets/img/logo2.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "      title: "Projet Startup",
      description: "Développement Web",
      imgUrl: projImg1,
    },
    {
      title: "Projet Startup",
      description: "Web Full Stack",
      imgUrl: projImg2,
    },
    {
      title: "Projet Startup",
      description: "Web Accessibilité",
      imgUrl: projImg3,
    },
    {
      title: "Projet Startup",
      description: "Développement Web",
      imgUrl: projImg1,
    },
    {
      title: "Projet Startup",
      description: "Web Full Stack",
      imgUrl: projImg2,
    },
    {
      title: "Projet Startup",
      description: "Web Accessibilité",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Portfolio conçu pour présenter mes compétences, projets et parcours professionnel.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <h4>Expériences Professionnelles</h4>
                          <h5>Hôte Relation Clients</h5>
                          <ul>
                            <li>Auchan , Kremlin-Bicetre</li>
                            <li>Accueil, assistance et relation client</li>
                            <li>Identification et résolution de problèmes</li>
                            <li> Travail sous pression, sens des priorités et prise d'initiatives</li>
                            <li>Travail en équipe, collaboration et gestion du temps</li>
                          </ul>
                          <h5>Agent De Commerce</h5>
                          <ul>
                            <li>Atlanteam , Créteil</li>
                            <li>Maintenance du parc informatique</li>
                            <li>Sens du service et de la satisfaction client</li>
                            <li>Participation à l'élaboration de stratégies commerciales</li>
                            <li>Respect des délais et des objectifs de vente</li>
                          </ul>
                          <h5>Caméraman Et Photographe</h5>
                          <ul>
                            <li>Indépendant Et Studio De Photo</li>
                            <li>Caméraman évènementiel et Photographe dans un studio de photo.</li>
                            <li>Persévérance et réactivité</li>
                            <li>Sens de la pédagogie et autonomie</li>
                            <li>Esprit de synthèse et rigueur</li>
                            <li>Sens de l'organisation et esprit d'équipe</li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Des remarques, des propositions autre choses contacter moi </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
