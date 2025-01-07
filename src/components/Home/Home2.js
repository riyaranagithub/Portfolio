import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girlAvatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
    I fell in love with frontend development and have been on a journey of continuous learning ever since. 🌱
    <br />
    <br />
    I am fluent in modern web technologies like
    <i>
      <b className="purple"> JavaScript, React.js, and Redux. </b>
    </i>
    <br />
    <br />
    My field of interest lies in building &nbsp;
    <i>
      <b className="purple">MERN stack applications</b> and exploring areas related to{" "}
      <b className="purple">real-time web technologies</b>.
    </i>
    <br />
    <br />
    Whenever possible, I also apply my passion for developing solutions with <b className="purple">Node.js</b> and
    <i>
      <b className="purple"> Modern Javascript Libraries and Frameworks</b>
    </i>
    &nbsp; like
    <i>
      <b className="purple"> React.js and Next.js</b>.
    </i>
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/riyaranagithub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/riyaranadseu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
