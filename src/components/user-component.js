import { LitElement, html, css } from 'lit';

export class UserComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .user__container{
                position: absolute;
                top: 150%;
                right: 0;
                width: 200px;
                height: 200px;
                border-radius: 20px;
                background-color: #f2f2f2e6;
            }
        `
    ];

    render() {
        return html`
        <div class="user__container">
        User
        </div>
        `;
    }
}
customElements.define('user-component', UserComponent);
