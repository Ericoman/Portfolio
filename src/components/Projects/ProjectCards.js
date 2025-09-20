import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsSteam } from "react-icons/bs";
import { FaGoogleDrive, FaItchIo } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}

        {props.glabLink && (
          <Button 
            variant="primary" 
            href={props.glabLink} 
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <AiFillGitlab /> &nbsp;
            {"GitLab"}
          </Button>
        )}

        {props.itchioLink && (
          <Button
            variant="primary"
            href={props.itchioLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <FaItchIo /> &nbsp;
            {"Itch.io"}
          </Button>
        )}


        {props.steamLink && (
          <Button
            variant="primary"
            href={props.steamLink}
            target="_blank"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            <BsSteam /> &nbsp;
            {"Steam"}
          </Button>
        )}

        {props.driveLink && (
          <Button 
            variant="primary" 
            href={props.driveLink} 
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
