import { memo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardWithHeader = ({onJoin, onReject}) => {

  return (
    <>
      <Card style={{ marginTop: "30px" }}>
        <Card.Header>New Event</Card.Header>
        <Card.Body>
          <Card.Title>Company trip</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>

          <Button variant="primary" onClick={onJoin}>
            Join
          </Button>

          <Button
            variant="danger"
            onClick={onReject}
            style={{ marginLeft: "20px" }}
          >
            Reject
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default memo(CardWithHeader);
