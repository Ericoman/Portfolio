import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsSteam } from "react-icons/bs";
import { FaGoogleDrive, FaItchIo } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { ImKeyboard, ImLaptop, ImPacman } from "react-icons/im";
import { Badge } from 'react-bootstrap';

function ProjectDetailsCard(props) {
  const project = props.project;
  const navigate = useNavigate();
  return (
    <Card 
      className="project-details-card-view"
    >
      <Button
          variant="primary" 
          style={{marginBottom: "10px" }}
          onClick={() => navigate(-1)}>
              Back to Projects
      </Button>
      <Card.Img variant="top" className='project-card-image-big' src={project.image} alt={project.title} />
      
      <Card.Body>
      <Card.Title>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        {project.inProgress && (
          <Badge 
          bg="warning" 
          text="dark"
          style={{ marginRight: "5px", marginLeft: "5px", marginBottom: "10px"}}
          >
            In Progress
          </Badge>
        )}
        {project.isSoloProject && (
          <Badge 
          bg="info" 
          text="dark"
          style={{ marginRight: "5px", marginLeft: "5px", marginBottom: "10px"}}
          >
            Solo Project
          </Badge>
        )}
      </Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
          {project.fullDescription && (
          <>
            <h2>
              Description:
            </h2>
            <p>{project.fullDescription}</p>
          </>
          )}
          <div>
              <h2>My contributions to this project include:</h2>
              <ul>
                  {project.contributions.map((tech, i) =>
                      <li className="about-activity" key={i}>
                          <ImKeyboard className='purple' /> {tech}
                      </li>
                  )}
              </ul>
          </div>
          <div>
              <h2>Technologies:</h2>
              <ul>
                  {project.technologies.map((tech, i) =>
                      <li className="about-activity" key={i}>
                          <ImLaptop className='purple' /> {tech}
                      </li>
                  )}
              </ul>
          </div>
          <h2>Links:</h2>
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
      </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectDetailsCard;