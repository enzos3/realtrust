import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import HOUSE1 from "../../assets/house1.jpg";
import HOUSE2 from "../../assets/house2.jpg";
import HOUSE3 from "../../assets/house3.jpg";
import HOUSE4 from "../../assets/house4.jpg";
import HOUSE5 from "../../assets/house5.jpg";
import HOUSE6 from "../../assets/house6.jpg";
import HOUSE7 from "../../assets/house7.jpg";
import HOUSE8 from "../../assets/house8.jpg";
import HOUSE9 from "../../assets/house9.jpg";

const About = () => {
  return (
    <section id='about'>
      <h5>Our experience</h5>
      <h2>About us</h2>

      <div className='container about__container'>
        <div className='about__me_container'>
          <div className='about__me-gallery'>
            <img src={HOUSE1} alt='Sale House 1' />
            <img src={HOUSE2} alt='Sale House 2' />
            <img src={HOUSE3} alt='Sale House 3' />
            <img src={HOUSE4} alt='Sale House 4' />
            <img src={HOUSE5} alt='Sale House 5' />
            <img src={HOUSE6} alt='Sale House 6' />
            <img src={HOUSE7} alt='Sale House 7' />
            <img src={HOUSE8} alt='Sale House 8' />
            <img src={HOUSE9} alt='Sale House 9' />
          </div>
        </div>

        <div className='about__content'>
          <div className='card'>
            <div className='card-content'>
              <h2 className='card_title'>About us</h2>
              <p className='card_body'>
                Fifteen years of experience in real estate, excellent customer
                service and a commitment to work hard, listen and follow
                through. We provide quality service to build relationships with
                clients and, more importantly, maintain those relationships by
                communicating effectively.
              </p>
              <a href='#costumers' className='btn button'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
