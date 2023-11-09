import { LitElement, html, css } from 'lit';
import '../components/hero-component'
import '../components/blog-component'
import '../components/aside-component'

export class Home extends LitElement {
    static get properties() {
        return {
            modalActive: { type: String },
        };
    }
    static styles = [
        css`
            :host {
                display: block;
                position: relative;
            }
        `
    ];

    constructor() {
        super();
        this.modalActive = false;
    }
    render() {
        return html`
        <hero-component @activeM="${this._activeModal}"></hero-component>
        <blog-component></blog-component>
        ${this.modalActive ? html`<modal-popup @getForm="${this._addTopic}" @activeM="${this._activeModal}"></modal-popup>` : ``
            }

        `;
    }
    _addTopic(evt) {
        this._activeModal(evt);
    }
    _activeModal(evt) {
        this.modalActive = evt.detail.modalState;
    }
}
customElements.define('home-view', Home);
