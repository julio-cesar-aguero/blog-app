import { LitElement, html, css } from 'lit';

export class ModalPopup extends LitElement {
    static styles = [
        css`
            :host {
                position: absolute;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .overlay{
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                backdrop-filter: blur(10px);
                z-index: 100;
            }
            .modal-box{
                position: relative;
                border-radius: 10px;
                max-width: 800px;
                width: 100%;
                height: auto;
                overflow:auto;
                padding: 1.5em;
                background-color: var(--bg-color);
                box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
            }
            .close-option{
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
            .modal-box__form{
                width: 100%;
                padding: 1em;
            }
            .modal-box__form h2{
                text-align: center;
            }
            
            .form{
                position: relative;
                width: 80%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1.5em;
            }
            .form input,textarea{
                height: 30px;
                text-align:center;
                padding: 0.5em 0.3em;
                margin: 0.5em;
                
                width: 90%;
                border: none;
                border-radius: 5px;
                outline: none;
                font-size: 1.2em;
            }
            .form input:focus,textarea:focus{
                background-color: var(--bg-color);
                color: white;
            }
            .input__container{
                display: flex;
                justify-content: space-between;
                align-items:center;
                width: 100%;
            }
            .input__icon{
                font-size: 1.8em;
            }
            .topic
             .group-button{
                width: 100%;
                padding: 1em;
                display: flex;
                justify-content: space-around;
                align-items: center;
             }
             .group-button .btn{
                width: 100px;
                padding: 1em;
                border: none;
                border-radius: 10px;
                font-size: 1em;
                font-weight: 800;
                cursor: pointer;
             }
             .group-button .btn-primary{
                background-color: var(--primary-color);
                color: white;
            }
            .group-button .btn-primary{
                padding: 0.5em;
                font-size: 1.5rem;
            }
            .group-button .btn-secondary{
                background-color: var(--almost-black);
                color: white;
            }
            @media (min-width: 768px) {
                
            }
        `
    ];

    static get properties() {
        return {
            form: { type: Object },
        };
    }
    constructor() {
        super();
        this.form = {
            topic: '',
            title: '',
            textTopic: '',
        }
    }

    render() {
        return html`
        
        <div class="overlay">
            <div class="modal-box">
            <div 
                class="close-option" 
                @click="${() => {
                const modalState = false;
                this.dispatchEvent(
                    new CustomEvent("activeM", {
                        bubbles: true,
                        detail: { modalState },
                    })
                )
            }}">
            <ion-icon name="close-outline"></ion-icon>
            </div>
            <div class="modal-box__form">
                <h2>Add Topic</h2>
                <div class="form">
                <div class="input__container">
                <ion-icon class="input__icon" name="pencil-outline"></ion-icon>
                <input type="text" id="topic" .value=${this.form.topic} name="topic" @change="${this._handleChange}" placeholder="Name Topic" required min="5" max="15">
                </div>
                <div class="input__container">
                <ion-icon name="bookmark"></ion-icon>
                <input type="text" id="title" .value=${this.form.title} name="title" @change="${this._handleChange}" placeholder="Title Topic" required>
                </div>
                
                <textarea type="text" id="title" .value=${this.form.textTopic} name="textTopic" @change="${this._handleChange}" placeholder="Content" required></textarea>
                <div class="group-button">
                    <button 
                        class="btn btn-primary"
                        @click="${() => {
                const data = this.form;
                const modalState = false;
                this.dispatchEvent(
                    new CustomEvent("getForm", {
                        bubbles: true,
                        detail: { data, modalState },
                    })
                )
            }}"
                    >
                    <ion-icon name="add-circle"></ion-icon>
                    </button>
                    <button class="btn btn-secondary"  @click="${() => {
                const modalState = false;
                this.dispatchEvent(
                    new CustomEvent("activeM", {
                        bubbles: true,
                        detail: { modalState },
                    })
                )
            }}">Cancel</button>
                </div>
                
                </div>
            </div>
        </div>
        </div>
        `;
    }
    _handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...this.form,
            [name]: value,
        };
        this.form = newValues;
        console.log(this.form);
        this._formIsEmpty();
    }
}
customElements.define('modal-popup', ModalPopup);
