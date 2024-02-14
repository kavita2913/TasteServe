import React from 'react'
import AboutBackground from "../Images/about-background.png";
import AboutBackgroundImage from "../Images/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

import './about.css'
const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Bringing 'Maa-ke-haath' ka khana to your doorstep!
                </h1>
                <p className="primary-text">
                    We offer an experience filled with exquisite flavors.
                    We use only the finest and freshest ingredients in our cuisine.
                    Each dish is crafted with a special touch that will leave your taste buds
                    thoroughly impressed.Our chef meticulously prepares each dish, ensuring that
                    every bite provides a new and delightful experience. Every spice has its place,
                    and the taste of each dish is unparalleled.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    {/* <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default About
