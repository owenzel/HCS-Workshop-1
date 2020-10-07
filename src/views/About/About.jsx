import React from "react";
import "./About.css";
import ProfilePic from "../../assets/OliviaGrandmaTurtle.jpg"; //2 dots next to each other means go back 1 folder...go back to views, then go back to source, then go into assets, then find something called OliviaGrandmaTurtle.jpg
import FunFactButton from "../../components/FunFactButton/FunFactButton";
import Education from "../../components/Education/Education";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={ProfilePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>About Me</h1>
          <p>I'm a proud Clevelander and lover of most things at the intersection of health, technology, and entrepreneurship.</p>
        </div>
        <div className="intro-item">
          <h1>Education</h1>
          <div className="education-item">
            <Education 
              school='Harvard University'
              year='2024'
              degree='Potential Bachelors of Arts in Computer Science'
            />
          </div>
          <div className="education-item">
            <Education 
              school='Laurel School'
              year='2020'
              degree='High School'
            />
          </div>
        </div>
      </div>
      <div class="intro-background">
        <div className="intro-item">
          <div className="fun-fact">
            <FunFactButton />
          </div>
        </div>
      </div>
    </div>
  );
}