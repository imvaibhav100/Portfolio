import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Full Stack Developer who loves building modern, responsive web applications. I specialize in creating seamless user experiences with cutting-edge technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, C, React.js, Spring Boot, and MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  E-commerce Platforms, Full Stack Web Applications,{" "}
                </b>
              </i>
              and solving complex problems with efficient, scalable solutions.
              <br />
              <br />
              I'm passionate about continuous learning and have solved 200+ coding problems across
              <b className="purple"> HackerRank, LeetCode, </b> and{" "}
              <i>
                <b className="purple">GeeksforGeeks</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
