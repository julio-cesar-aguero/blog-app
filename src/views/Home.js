import { LitElement, html, css } from 'lit';
import '../components/hero-component'
import '../components/blog-component'
export class Home extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <hero-component></hero-component>
        <blog-component></blog-component>
        `;
    }
}
customElements.define('home-view', Home);
