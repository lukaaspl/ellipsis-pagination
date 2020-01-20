import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Session from "../components/Session";
import Pagination from "../components/Pagination";
import GoTopButton from "../components/GoTopButton";
import SessionSelect from "../components/SessionSelect";
import { useScroll } from "../helpers/scroll";
import { allSessions } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const App = () => {
  const allSessionsCount = allSessions.length;
  const [sessionsPerPage, setSessionsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollPosition = useScroll();

  const lastSessionNumber = currentPage * sessionsPerPage;
  const firstSessionIndex = lastSessionNumber - sessionsPerPage;
  const limitedSessions = allSessions.slice(
    firstSessionIndex,
    lastSessionNumber
  );

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="navbar">
          <div>Loaded sessions: {allSessionsCount}</div>
          <SessionSelect
            itemsPerPage={sessionsPerPage}
            setItemsPerPage={setSessionsPerPage}
          />
        </Navbar.Brand>
      </Navbar>
      <Container>
        {limitedSessions.map(session => (
          <Session key={session.id} {...session} />
        ))}
        <Pagination
          itemsCount={allSessionsCount}
          itemsPerPage={sessionsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          alwaysShown={false}
        />
        <GoTopButton visible={scrollPosition > 400} />
      </Container>
    </>
  );
};

export default App;
