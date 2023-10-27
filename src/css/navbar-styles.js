import { css } from "lit";
export default css`
  .container {
    width: 100%;
    position: fixed;
    z-index: 100;
    max-width: 1500px;
    margin: 0 auto;
  }
  .nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__hamburger {
    position: absolute;
    top: 0;
    right: 5%;
    width: 30px;
    height: 50px;
    background-image: url("../../assets/images/icon-menu.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    z-index: 100;
    transition: background-image 0.3s;
  }
  .nav__hamburger--open {
    background-image: url("../../assets/images/icon-close-menu.svg");
  }
  .nav__overlay {
    background-color: #3333;
    position: fixed;
    inset: 0;
    cursor: pointer;
    z-index: 0;
  }

  .nav__overlay--close {
    opacity: 0;
    pointer-events: none;
  }
  .nav__overlay .nav__menu {
    position: absolute;
    top: -5%;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
    width: 55%;
    max-width: 400px;
    height: 100%;
    padding: 0;
    list-style: none;
    overflow: auto;
    padding: 7em 0;
    opacity: 0.9;
    pointer-events: unset;
    transition: all 0.3s;
  }
  .nav__item {
    width: 80%;
    margin: 0 auto;
    color: var(--almost-black);
    cursor: pointer;
    padding: 20px 0;
  }
  .nav__item:has(.nav__parent) {
    padding: 0;
  }
  .nav__inner {
    list-style: none;
    padding: 0 0.5em;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1.5em;
    overflow: hidden;
    height: 0;
    transition: height 0.4s;
  }
  .nav__parent {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 1.3em;
    padding: 20px 0;
    font-weight: 500;
    color: #000000cd
  }
  .nav__inner .nav__link{
    color: #333333;
    padding: 0 0.5em;
  }
  .nav__link {
    font-weight: 300;
    text-decoration: none;
    color: var(--almost-black);
  }
  .nav__login {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .nav__login--border {
    border-radius: 1em;
    margin-top: 20px;
    border: 1px solid var(--medium-gray);
  }
  .nav__sign {
    display: inline-block;
    color: var(--medium-gray);
    padding: 0.7em;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .nav {
      gap: 4em;
      overflow: visible;
      padding: 0 5em 0;
      backdrop-filter: blur(120px);
      border-radius: 0 0 1em 1em;
    }
    .nav__hamburger {
      display: none;
    }

    .nav__overlay {
      background-color: transparent;
      position: unset;
      pointer-events: unset;
      flex: 1;
      pointer-events: unset;
      opacity: 1;
    }
    
    .nav__overlay .nav__menu{
      width: 100%;
      max-width: unset;
      opacity: 1;
      position: unset;
      padding: 0;
      overflow: visible;
      display: flex;
      align-items: center;
      gap: 2em;
      background: transparent;
      
    }
    
    .nav__item{
      width: max-content;
      margin: 0;
      padding: 0;
      position: relative;
    }
    .nav__item{
      font-weight: 900;
    }
    .nav__inner{
      position: absolute;
      left: 0;
      padding: 0;
      width: max-content;
      height: auto;
      padding: 2em;
      background-color: #fff;
      z-index: 1000;
      border-radius: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: opacity .3s;
      opacity: 0;
      pointer-events: none;
    }
    .nav__inner--show{
      opacity: 1;
      pointer-events: unset;
    }
    .nav__login{
      width: max-content;
      margin: 0;
      margin-left: auto;
    }
    .nav__login--border{
      margin: 0;
      padding: 0 1.5em;
    }
  }
`;
