import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='me'>
          <h1 className='title'>Real Trust</h1>
        </div>

        <h5 className='text-light'>Selling your home, at the best price.</h5>
        <CTA />
        <HeaderSocials />

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
