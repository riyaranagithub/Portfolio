import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="QuickChat"
              description="A real-time chat application built using React, MongoDB, and Socket.IO for seamless communication with features like typing indicators and user authentication."
              ghLink="https://github.com/riyaranagithub/QuickChat"
              demoLink="https://qucikchat.netlify.app"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Expense Tracker"
              description="A web application for tracking daily expenses, built using React, Firebase, and Tailwind CSS with Netlify deployment."
              ghLink="https://github.com/riyaranagithub/ExpenseTracker"
              demoLink="https://exxpense-trackker.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blog Platform"
              description="A blogging platform built using React and Appwrite for creating and managing posts with features like a rich text editor and user authentication."
              ghLink="https://github.com/riyaranagithub/Blog-Platform"
              demoLink="https://my-blog-platform.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Meme Generator"
              description="A fun project to generate memes with custom text using React and a public meme API."
              ghLink="https://github.com/riyaranagithub/Meme-Generator"
              demoLink="https://meme-generator-react-rr.netlify.app/"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="React Redux Appwrite Todo"
              description="A fully functional Todo application built with React, Redux, and Appwrite, featuring CRUD operations and state management."
              ghLink="https://github.com/riyaranagithub/React-Redux-Appwrite-Todo"
              demoLink="https://react-redux-appwrite-todo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Swiggy API Clone"
              description="A clone of Swiggy using live APIs, React, and React Router for displaying restaurant menus and implementing routing functionalities."
              ghLink="https://github.com/riyaranagithub/SwiggyApi"
              demoLink="https://swiggyapilive.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
