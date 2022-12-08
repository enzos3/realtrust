import React from "react";
import "./introduction.css";
import RELATOR from "../../assets/relator.jpg";

const Introduction = () => {
  return (
    <div>
      <section id='introduction'>
        <h1 className='introduction__title'>Not your average Relator</h1>
        <div className='container'>
          <div className='introduction__container'>
            <img src={RELATOR} alt='Introduction' />
            <h5>
              Real Trust has an eye for seeing a property's potential,
              coordinating design, and eectively marketing to get homeowners top
              dollar on their sale.
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
