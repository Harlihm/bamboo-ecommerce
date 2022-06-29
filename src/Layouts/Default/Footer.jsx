import React from "react";
import style from "./style.module.css"
import Logo2 from "./logo2"
import { SiFacebook } from "react-icons/si";
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContainer__socialContainer}>
        <form className={style.footerContainer__socialContainerForm}>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Enter Your E-mail Address Here"
            className={style.footerContainer__socialContainerFormInput}
          />
        </form>
        <div className={style.footerContainer__socialcontainer1}>
          <h1>JOIN US NOW</h1>
         
          <button className={style.navButton_facebook}>
          <SiFacebook />
          </button>
          <button className={style.navButton_twitter}>
          <AiFillTwitterCircle />
          </button>
          <button className={style.navButton}>
          <BsInstagram />
          </button>
      </div>
      </div>
      <div className={style.footerContainer__condition}>
        <div className={style.footerContainer__conditionItems}> 
        <a className={style.footerContainer_link} href="">TERMS & CODITION POLICY</a>
      <div className={style.footerContainer_logo}>
        <Logo2  />
      </div>
        
       
        <a className={style.footerContainer_link} href="">2019 Bamboo All Rights Reserved</a>
    
        </div>
  </div>

    </footer>
  );
};

export default Footer;
