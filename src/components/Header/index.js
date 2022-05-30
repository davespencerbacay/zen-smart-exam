import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { applicantBriefInfo } from "../../App";

const Header = (props) => {
  return (
    <div className="header-container">
      <Container>
        <h1 className="custom-fw-bold">{props.title}</h1>
        <div>{props.description}</div>

        <div className="taker-container">
          <h5 className="custom-fw-bold">{applicantBriefInfo.name}</h5>
          <p>{applicantBriefInfo.dateTaken}</p>
        </div>
      </Container>
    </div>
  );
};

Header.defaultProps = {
  title: "ZenSmart React Exam",
  description: (
    <p>
      Create an todolist using <pre>create-react-app</pre>
    </p>
  ),
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Header;
