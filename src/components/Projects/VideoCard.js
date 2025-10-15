import Card from "react-bootstrap/Card";

function VideoCard(props) {
  const video = props.video;
  return (
    <Card 
      className="project-card-view"
    >
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={video.url}
          title={video.title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Card>
  );
}

export default VideoCard;