import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import underpacked from "../../Assets/Projects/underpacked.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={underpacked}
              title="Underpacked!"
              description="Welcome to the largest parcel delivery company in the galaxy! Embark on a space odyssey as a delivery driver, either alone or with a friend. Dodge threats, survive job insecurity, and deliver packages. Prove that you are the best delivery drivers in the universe!"
              steamLink="https://store.steampowered.com/app/3587480/Underpacked/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
