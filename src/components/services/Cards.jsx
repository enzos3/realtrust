import React from "react";
import "./services.css";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";

const Cards = () => {
  return (
    <>
      <div className='cards__container'>
        {/* CARD 1 */}
        <div className='cards'>
          <div className='tilting-card-wrapper'>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>

            <div className='cards-content'>
              <h1>Potential ROI</h1>
              <GiReceiveMoney className='cards__icons' />
              <p>
                Whether you are looking to buy a fixer upper or renovate your
                current home for sale, we will walk you through potential
                returns for proyects.
              </p>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className='cards'>
          <div className='tilting-card-wrapper'>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>

            <div className='cards-content'>
              <h1>Design</h1>
              <MdOutlineDesignServices className='cards__icons' />
              <p>
                Our background in interior design makes the perfect gide through
                your design options and coordinating contractors to complete the
                home upgrade.
              </p>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className='cards'>
          <div className='tilting-card-wrapper'>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>
            <div className='tilting-cards'></div>

            <div className='cards-content'>
              <h1>Marketing</h1>
              <GoMegaphone className='cards__icons' />
              <p>
                Staging consultation, professional photos and sophisticated
                digital marketing plan accompany every listing to reach today's
                buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
