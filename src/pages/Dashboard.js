import { useCallback, useState } from "react";
import { Container } from "react-bootstrap";

import CardWithHeader from "../component/CardWithHeader";

function Dashboard() {
  const [counter, setCounter] = useState(0);

  const handleJoin = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleReject = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <Container fluid>
      <h1>{counter}</h1>
      <CardWithHeader
        onJoin={handleJoin}
        onReject={handleReject}
      ></CardWithHeader>
    </Container>
  );
}

export default Dashboard;
