import { css } from "lit";
export default css`
.wrapper{
  
  position: relative;
  width: 300px;
  height: 550px;
  max-height: 100%;
  background-color: var(--bg-card-color);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  padding: 4.5em;
  border-radius: 1em;
  border: 2px solid rgba(225, 255, 255, .5);
  backdrop-filter: blur(20px);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.form-box{
  width: 100%;
}
.form-box form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.form-box h2{
  font-size: 2em;
  color: var(--text-color);
  text-align: center;
}
.input-box{
  width: 100%;
  position: relative;
  height: 50px;
  border-bottom: 2px solid var(--primary-color);
  margin: 30px;
}
.input-box label{
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: var(--text-color);
  font-weight: 500;
  pointer-events: none;
  transition: .5s;

}
.input-box input:focus~label, 
.input-box input:valid~label{
  top: -5px;
}
.input-box input{
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 1em;
  color: var(--text-color);
  font-weight: 600;
  padding: 0 35px 0 5px;
}
.input-box .icon{
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: var(--text-color);
  line-height: 57px;
}
  .remember-forgot{
    width: 100%;
    font-size: .9em;
    color: var(--text-color);
    font-weight: 500;
    margin: -15px 10px 15px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    cursor: pointer;
  }
  .remember-forgot label input{
    accent-color: var(--primary-color);
    margin-right: 3px;
  }
  .remember-forgot a{
    text-decoration: none;
  }
  .remember-forgot a:hover{
    text-decoration: underline;
  }
  .btn{
    width: 100%;
    margin: 20px auto;
    height: 45px;
    background-color: var(--primary-color);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border: none;
    border-radius: 1em;
    cursor: pointer;
    font-size: 1em;
    color: var(--almost-white);
    font-weight: 500;
  }
  .login-register{
    font-size: .9em;
    color: var(--text-color);
    text-align: center;
    font-weight: 500;
    margin: 2em 1em;
  }
  .login-register p a{
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
  }
  .login-register p a:hover{
    text-decoration: underline;
  }


  .register{
    height: auto;
  }
  .alert-message{
    opacity: 0;
    position: absolute;
    top: 10%;
    left: -100%;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    background-color: var(--bg-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: left .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .alert-message--active{
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 1;
    left: 0;
    z-index: 100;
  }
  .alert-message--active .alert-toast{
    display: grid;
    place-content: center;
    height: 100%;
    font-size: 2em;
    
  }
  .alert-message--active small{
    display: flex;
    flex-direction: column;
  }
  .alert-message--active .close-toast{
    cursor: pointer;
    color: red;
  }
  .g-signin2{
    background-color: red;
    cursor: pointer;
  }
  #signInButton{
    display: grid;
    place-content: center;
    padding: 0.2em;
    width: 100%;
  }
  #signInButton button{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  #signInButton ion-icon{
    height: 100%;
    margin-right: 0.3em;
  }
`;
