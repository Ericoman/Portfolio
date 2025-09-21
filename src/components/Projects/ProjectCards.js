import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import { BsGithub, BsSteam } from "react-icons/bs";
import { FaGoogleDrive, FaItchIo } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate();
  const project = props.project;

  return (
    <Card 
      className="project-card-view"
      onClick={() => navigate(`/project/${project.id}`)}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" className="project-card-image" src={project.image} alt={project.title} />
      <Card.Body>
        <Card.Title>
          {project.title}
          {project.inProgress && (
            <Badge 
              bg="warning" 
              text="dark"
              style={{ marginLeft: "10px", marginBottom: "10px"}}
            >
              In Progress
            </Badge>
          )}
          {project.isSoloProject && (
          <Badge 
          bg="info" 
          text="dark"
          style={{ marginLeft: "10px", marginBottom: "10px"}}
          >
            Solo Project
          </Badge>
        )}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {project.shortDescription}
        </Card.Text>

        {project.ghLink && (
          <Button 
            variant="primary" 
            href={project.ghLink} 
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}

        {project.glabLink && (
          <Button 
            variant="primary" 
            href={project.glabLink} 
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <AiFillGitlab /> &nbsp;
            {"GitLab"}
          </Button>
        )}

        {project.itchioLink && (
          <Button
            variant="primary"
            href={project.itchioLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <FaItchIo /> &nbsp;
            {"Itch.io"}
          </Button>
        )}


        {project.steamLink && (
          <Button
            variant="primary"
            href={project.steamLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <BsSteam /> &nbsp;
            {"Steam"}
          </Button>
        )}

        {project.driveLink && (
          <Button 
            variant="primary" 
            href={project.driveLink} 
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <FaGoogleDrive /> &nbsp;
            {"Drive (Demo)"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
