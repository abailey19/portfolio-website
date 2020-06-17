/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">Contact</div>
      <div className="footer-icons">
        <SocialIcon
          url="https://www.facebook.com/anne.bailey.58555"
          bgColor="transparent"
          fgColor="black"
          className="icon"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/annegbailey"
          bgColor="transparent"
          fgColor="black"
          className="icon"
        />
        <SocialIcon
          url="https://github.com/abailey19"
          bgColor="transparent"
          fgColor="black"
          className="icon"
        />
        <SocialIcon
          url="mailto:annebailey1@icloud.com"
          bgColor="transparent"
          fgColor="black"
          className="icon"
        />
        <SocialIcon
          url="https://www.instagram.com/anne.bailey1"
          bgColor="transparent"
          fgColor="black"
          className="icon"
        />
      </div>
    </div>
  );
};

export default Footer;
