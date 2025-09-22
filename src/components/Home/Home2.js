import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGitlab
} from "react-icons/ai";
import { FaLinkedinIn,FaItchIo } from "react-icons/fa";
import Type from "./Type";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <Row >
              <p className="heading-name">
                I'm
                <strong className="main-name"> Eduardo Rico Manzanera</strong> a
              </p>
              <div style={{ minHeight:50, textAlign: "justify" }}>
                <Type />
              </div>
            </Row>
            <Row>
            <p className="home-about-body">
              Videogames have been an important part of my life since I was little.
              I fell in love with programming them and I try my best to learn more every day
              in order to bring them to live so players can enjoy them.
              <br />
              <br />
              I am fluent in Game Engines like
              <i>
                <b className="purple"> Unity and Unreal Engine 5 </b>
              </i>
              <br />
              and languages like
              <i>
                <b className="purple"> C# and C++. </b>
              </i>
              <br />
            </p>
            </Row>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ericoman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://gitlab.com/eduardoricomanzanera"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eduardo-rico-manzanera-4538ab190"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://eddricman.itch.io"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaItchIo />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
