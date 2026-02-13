import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSpringboot, SiThymeleaf } from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="Typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{ fontSize: "50px", color: "#EC5D0F" }} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{ fontSize: "50px", color: "#1572B6" }} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot style={{ fontSize: "50px", color: "#6DB33F" }} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiThymeleaf style={{ fontSize: "50px", color: "#005C0F" }} />
        <div className="tech-icons-text">Thymeleaf</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" />
        <div className="tech-icons-text">Tailwind</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="Redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* Tools & Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="MUI" />
        <div className="tech-icons-text">Material UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
