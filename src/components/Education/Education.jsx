import React, { useState } from "react";
import "./Education.css";
import pic1 from "../../assets/EducationImages/education_1.jpg";
import pic2 from "../../assets/EducationImages/education_2.jpg";
import pic3 from "../../assets/EducationImages/education_3.jpg";
import pic4 from "../../assets/EducationImages/education_4.jpg";
import pic5 from "../../assets/EducationImages/education_5.jpg";

export default class Education extends React.Component {
    constructor(props) {
      super(props);
      const pictures = [pic1, pic2, pic3, pic4, pic5];
      this.state = {
        picture: pictures[Math.floor(Math.random() * pictures.length)],
      };
    }

    render() {
      return (
        <div>
          <b>{this.props.school}</b>
          <br />
          {this.props.degree}
          <br />
          {this.props.year}
          <br />
          <img src={this.state.picture} />
        </div>
      )
    }
  }