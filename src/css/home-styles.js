import { css } from "lit";
export default css`
.stop-scrolling {
    height: 0;
    overflow-y: hidden;
  }
  .overlay__alert {
    position: absolute;
    z-index: 200;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
    pointer-events: stroke;
  }
  .alert {
    position: fixed;
    z-index: 220;
    top: 20%;
    left: 0;
    width: 100%;
    height: 300px;
    background-color: var(--bg-card-color);
    color: var(--text-color);
    margin: 0 auto;
    pointer-events: auto;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(1.01);
    transition: all 5s cubic-bezier();
  }
  .alert:hover {
    transform: scale(1.05);
    transition: all 5s cubic-bezier();
  }
  .alert ion-icon {
    font-size: 6em;
    margin: 0.2em;
    color: var(--text-color);
  }
  .alert-button__container {
    width: 100%;
    height: 15%;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .alert-button__container button {
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 1em;
    background-color: var(--primary-color);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: white;
    font-weight: 800;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  .alert-button__container button:hover {
    background-color: var(--bg-card-color);
    color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .alert-button__container .button--secondary {
    background-color: #f59e0b;
  }
  .alert--green {
    border-top: 10px solid var(--secondary-color);
  }

  .alert--red {
    border-top: 10px solid red;
  }
  @media (min-width: 768px) {
    .alert {
      left: 22%;
      width: 55%;
      border-radius: 10px;
    }
    .alert h2 {
      font-weight: 800;
      letter-spacing: 0.3em;
    }
    .alert-button__container {
      width: 80%;
    }
    .alert-button__container button {
      width: 30%;
    }
    .alert-small {
      left: 0;
      right: 0;
      width: 40%;
    }
  }
`;