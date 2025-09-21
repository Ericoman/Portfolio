import { useParams } from 'react-router-dom';
import projects from '../../Assets/data/projects';
import { Container, Row, Col } from "react-bootstrap";
import ProjectDetailsCard from './ProjectDetailsCard';
import Particle from '../Particle';

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <Container fluid className="project-details-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <ProjectDetailsCard
              project={project}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;