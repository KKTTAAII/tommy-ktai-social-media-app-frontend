import React from "react";
import PIC1 from "../assets/pictures/signupPage.jpg";
import PIC2 from "../assets/pictures/signupPage1.jpg";
import PIC3 from "../assets/pictures/signupPage2.jpg";
import "../css/ImageCrossFading.css";

const ImageCrossFading = () => {
  return (
    <div className="Image-container">
      <img className="PIC1" src={PIC1}></img>
      <img className="PIC2" src={PIC2}></img>
      <img className="PIC3" src={PIC3}></img>
    </div>
  );
};

export default ImageCrossFading;
