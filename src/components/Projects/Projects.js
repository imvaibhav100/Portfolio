import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mediease from "../../Assets/Projects/mediease.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import tradesphere from "../../Assets/Projects/tradesphere.png";
import multicart from "../../Assets/Projects/multicart.png";
import bank from "../../Assets/Projects/bank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediease}
              isBlog={false}
              title="MediEase"
              description="India's Most Trusted Generic Medicine Pharmacy offering up to 85% savings on medicines. Built with modern web technologies featuring medicine search, prescription upload, quality-checked products, free delivery, and 100% genuine medicines with over 10 Lakh+ happy customers."
              ghLink="https://github.com/imvaibhav100/MediEase.git"
              demoLink="https://mediease-front.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food Factory"
              description="A comprehensive food ordering and management platform built with modern web technologies. Features include menu browsing, order management, cart functionality, and seamless user experience for food delivery services."
              ghLink="https://github.com/imvaibhav100/Food-factory.git"
              demoLink="https://food-factory-00d2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradesphere}
              isBlog={false}
              title="TradeSphere"
              description="A comprehensive trading platform built with modern web technologies. Features include real-time market data, trading analytics, portfolio management, and secure transaction processing for seamless trading experience."
              ghLink="https://github.com/imvaibhav100/TradeSphere.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multicart}
              isBlog={false}
              title="MultiCart"
              description="A full-featured e-commerce platform built with modern web technologies. Features include product catalog browsing, shopping cart management, order processing, secure payment integration, user authentication, and admin dashboard for inventory management."
              ghLink="https://github.com/imvaibhav100/E-commerce.git"
              demoLink="https://e-commerce-2hai.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Banking Platform"
              description="A modern banking platform built with cutting-edge web technologies. Features include account management, fund transfers, transaction history, bill payments, investment tracking, and secure banking with advanced security measures."
              ghLink="https://github.com/imvaibhav100/Banking-website.git"
              demoLink="https://banking-website-theta-ashy.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
