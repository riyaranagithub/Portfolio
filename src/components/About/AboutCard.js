import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Riya Rana</span> from{""}
            <span className="purple">Delhi, India</span>.
            <br />
            I am currently pursuing BCA at Delhi Skill and Entrepreneurship
            University (DSEU).
            <br />
            I am passionate about becoming a MERN stack developer and honing my
            frontend development skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs about Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and Experimenting with New Frameworks
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
