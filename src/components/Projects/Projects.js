import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import VideoCard from "./VideoCard";
import Particle from "../Particle";
import projects from '../../Assets/data/projects.js';
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Highlight <strong className="purple">Reel</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} key={"wT2HClmmfxc"} className="project-card">
            <VideoCard
              video={{url:"https://www.youtube.com/embed/wT2HClmmfxc",title:"Portfolio Highlight Reel"}}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map(project=>(
          <Col md={4} key={project.id} className="project-card">
            <ProjectCard
              project={project}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
