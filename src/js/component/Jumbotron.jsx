import React from "react";
import PropTypes from "prop-types";
import "./Jumbotron.css"; // Import your custom CSS file

export const Jumbotron = (props) => {
  return (
    <div className="custom-jumbotron">
      <div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <a
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noreferrer"
          href={props.buttonURL}
          role="button"
        >
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

Jumbotron.defaultProps = {
  title: "Welcome to react",
  description: "React is the most popular rendering library in the world",
  buttonLabel: "Go to the official website",
  buttonURL: "https://reactjs.org/",
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};