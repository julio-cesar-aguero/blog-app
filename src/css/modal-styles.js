import { css } from "lit";
export default css`
  :host {
    width: 100vw;
    position: relative;
    top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5%;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    backdrop-filter: blur(10px);
    z-index: 100;
  }
  .modal-box {
    border-top: 10px solid var(--primary-color);
    position: relative;
    border-radius: 10px;
    max-width: 900px;
    width: 100vw;
    height: 500px;
    overflow: auto;
    padding: 0.4em;
    background-color: var(--bg-color);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 200;
  }
  .close-option {
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    place-content: center;
    background-color: var(--bg-color);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 0 10px 0;
    cursor: pointer;
  }
  .modal-box__form h2 {
    text-align: center;
  }

  .form {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .form input {
    height: 25px;
    text-align: center;
    padding: 0.8em 0.3em;
    width: 90%;
    margin: 0.5em;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 0.8em;
    background-color: var(--bg-color);
  }
  .form input:focus,
  textarea:focus {
    background-color: var(--bg-card-color);
    color: var(--text-color);
    border: 3px solid var(--primary-color);
  }
  .blog__information {
    position: relative;
    width: 100%;
    display: grid;
    place-items: center;
    gap: 50;
    padding: 1em 0.5em;
    background: var(--bg-card-color);
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 1em;
    margin: 0 0.4em;
  }
  .input__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
  }
  .right {
    background-color: var(--bg-card-color);
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 1em;
    padding: 0.6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .text-area__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .text-area__container textarea {
    width: 100%;
    height: auto;
    min-height: 300px;
    border: none;
    border-radius: 10px;
    resize: none;
    outline: none;
    background-color: var(--bg-color);
  }
  .group-button {
    width: 100%;
    padding: 1em;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
  .group-button .btn {
    width: 120px;
    padding: 1.2em;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    border: 5px solid var(--bg-card-color);
  }
  .group-button .btn-primary {
    background-color: var(--primary-color);

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    color: white;
  }
  .group-button .btn-primary {
    padding: 0.5em;
    font-size: 1.5rem;
  }
  .group-button .btn-secondary {
    background-color: var(--almost-black);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    color: white;
  }
  .tag-input {
    background-color: var(--bg-card-color);
    position: relative;
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;
  }
  .input-wrap {
    border: 1px solid var(--text-color);
    border-radius: 5px;
    display: flex;
    margin: 1em 0;
  }
  .input-wrap input {
    background: var(--bg-card-color);
    border: none;
    padding: 0.5em;
    width: 100%;
    font-size: 0.9em;
    color: var(--text-color);
  }
  .input-wrap input:focus {
    outline: none;
    color: var(--text-color);
  }
  .input-wrap input,
  .input-wrap input::placeholder,
  .tag-input small {
    color: var(--text-color);
  }
  .input-wrap ion-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    font-size: 2.1em;
    margin: auto 0.5em;
  }
  .tag {
    border-radius: 5px;
    display: inline-block;
    margin: 0.2em;
    transition: var(--transition);
    background-color: var(--primary-color);
    padding: 0.3em 0.6em;
    border-radius: var(--border-radius);
    color: var(--bg-color);
  }
  .tag span {
    font-size: 0.7em;
    cursor: pointer;
  }
  .tag b {
    padding-bottom: 1em;
  }
  .tags {
    width: 100%;
    height: auto;
    max-height: 200px;
    overflow: scroll;
    margin-bottom: 1.5em;
  }
  .img-blog__container {
    margin: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 2em;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .img-blog__container img {
    width: 50%;
  }
  .img-blog__container .img-file {
    display: flex;
    flex-direction: column;
  }
  .input-file {
    padding: 0.6em 0.8em;
    border: none;
    background: var(--primary-color);
  }

  /* Alert Toast*/

  .alert-message {
    opacity: 0;
    position: absolute;
    top: 10%;
    left: -100%;
    width: 420px;
    height: 100px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: var(--bg-card-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: left 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .alert-message--active {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 10px solid orange;
    opacity: 1;
    left: 33%;
    z-index: 100;
    pointer-events: fill;
    transition: -webkit-animation .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    -webkit-animation: tiembla 0.101s;
  }
  .alert-message--active .alert-toast {
    display: grid;
    place-content: center;
    height: 100%;
    font-size: 4.5em;
   
  }
  .alert-message--active small {
    display: flex;
    flex-direction: column;
  }
  .alert-message--active .close-toast {
    font-size: 2em;
    font-weight: 800;
    cursor: pointer;
    color: red;
  }
  @media (min-width: 768px) {
    .overlay {
      position: fixed;
    }
    .modal-box {
      display: block;
      position: relative;
      max-width: 1200px;
      max-height: 80%;
      height: auto;
      padding: 0;
    }
    .form {
      justify-content: start;
      align-items: flex-start;
    }
    .blog__information {
      margin-left: 1em;
      align-items: flex-start;
      width: 40%;
      height: 100%;
      padding: 1em;
      overflow: scroll;
    }
    .blog__information .input__container {
      width: 100%;
    }
    .input__container input {
      width: 100%;
    }
    .right {
      position: relative;
      width: 50%;
    }
    .text-area__container {
      width: 100%;
      height: 50%;
      margin: 0 auto;
    }
    .text-area__container textarea {
      min-height: 120px;
      height: 50%;
    }
    .tags {
      height: auto;
      max-height: 150px;
      overflow: scroll;
    }
    .img-blog__container {
      width: 100%;
    }
    .img-prev {
      width: 20%;
      margin: 10px 20px;
      
    }
    .img-prev img{
      width: 100px;
      border-radius: 5px;
    }
  }
  @-webkit-keyframes tiembla{
    0%  { -webkit-transform:rotateZ(-5deg); }
    50% { -webkit-transform:rotateZ( 0deg) scale(0.3); }
    100%{ -webkit-transform:rotateZ( 5deg); 
  }
`;
