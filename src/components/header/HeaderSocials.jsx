import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.instagram.com/victoriamakeup.ok/?igshid=YmMyMTA2M2Y%3D'
        target='_blank'
        rel='noreferrer'>
        <BsInstagram />
      </a>
      <a
        href='https://www.facebook.com/viqii.guajrdo'
        target='_blank'
        rel='noreferrer'>
        <AiFillFacebook />
      </a>
      <a
        href='https://api.whatsapp.com/send?phone=542634692173'
        target='_blank'
        rel='noreferrer'>
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
