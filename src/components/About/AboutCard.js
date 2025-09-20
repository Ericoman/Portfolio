import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eduardo Rico Manzanera </span>
            from <span className="purple"> Salamanca, Spain.</span>
            <br />
            I am currently employed as a <span className="purple">Senior Software Developer at ARSOFT</span>.
            <br />
            I have completed <span className="purple">Computer Engineering</span> at University of Salamanca and 
            a Master's Degree in <span className="purple">Videogame Programming</span> at Complutense University of Madrid.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my loved ones
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love is not only something you feel, it is something you do"{" "}
          </p>
          <footer className="blockquote-footer">David Wilkerson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
