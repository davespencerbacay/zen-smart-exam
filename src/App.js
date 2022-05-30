import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Table from "./components/Table";

export const applicantBriefInfo = {
  name: "Dave Spencer Bacay",
  dateTaken: "May 20, 2022",
};

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Table />
      </Container>
    </React.Fragment>
  );
};

export default App;
