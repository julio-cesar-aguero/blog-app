import { LitElement, html, css } from 'lit';
import './aside-component'
import styles from '../css/blog-styles'
export class BlogComponent extends LitElement {
    static get styles() {
        return [styles];
    }
    render() {
        return html`
            <div class="container">
                <div id="blog" class="blog">
                    <h2 class="h2">Lastest Blog Post</h2>
                    <div class="blog-card-group">
                        <div class="blog-card">
                            <div class="blog-card-banner">
                                <img src="../../assets/263.svg" alt="" width="250" class="blog-banner-img">
                            </div>
                            <div class="blog-content-wrapper">
                                <button class="blog-topic text-tiny">Database</button>
                                <h3>
                                    <a href="#" class="h3">
                                        Building microservices with Dropwizard, MongoDB & Docker
                                    </a>
                                </h3>
                                <p class="blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem soluta quae molestias cupiditate eaque possimus fugit est ea consequuntur laudantium tenetur, sint assumenda non enim labore debitis earum vero.
                                </p>
                                <div class="wrapper-flex">
                                    <div class="profile-wrapper">
                                    <ion-icon name="time-outline"></ion-icon>
                                    </div>
                                    <div class="wrapper">
                                    <a href="#" class="h4">Julio Aguero</a>
                                        <p class="text-sm">
                                            <time datetime="2022-01-17">Jan 17, 2022</time>
                                            <span class="separator"></span>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <time datetime="PT3M">3 min</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card">
                            <div class="blog-card-banner">
                                <img src="../../assets/263.svg" alt="" width="250" class="blog-banner-img">
                            </div>
                            <div class="blog-content-wrapper">
                                <button class="blog-topic text-tiny">Database</button>
                                <h3>
                                    <a href="#" class="h3">
                                        Building microservices with Dropwizard, MongoDB & Docker
                                    </a>
                                </h3>
                                <p class="blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem soluta quae molestias cupiditate eaque possimus fugit est ea consequuntur laudantium tenetur, sint assumenda non enim labore debitis earum vero.
                                </p>
                                <div class="wrapper-flex">
                                    <div class="profile-wrapper">
                                    <ion-icon name="time-outline"></ion-icon>
                                    </div>
                                    <div class="wrapper">
                                    <a href="#" class="h4">Julio Aguero</a>
                                        <p class="text-sm">
                                            <time datetime="2022-01-17">Jan 17, 2022</time>
                                            <span class="separator"></span>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <time datetime="PT3M">3 min</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card">
                            <div class="blog-card-banner">
                                <img src="../../assets/263.svg" alt="" width="250" class="blog-banner-img">
                            </div>
                            <div class="blog-content-wrapper">
                                <button class="blog-topic text-tiny">Database</button>
                                <h3>
                                    <a href="#" class="h3">
                                        Building microservices with Dropwizard, MongoDB & Docker
                                    </a>
                                </h3>
                                <p class="blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem soluta quae molestias cupiditate eaque possimus fugit est ea consequuntur laudantium tenetur, sint assumenda non enim labore debitis earum vero.
                                </p>
                                <div class="wrapper-flex">
                                    <div class="profile-wrapper">
                                    <ion-icon name="time-outline"></ion-icon>
                                    </div>
                                    <div class="wrapper">
                                    <a href="#" class="h4">Julio Aguero</a>
                                        <p class="text-sm">
                                            <time datetime="2022-01-17">Jan 17, 2022</time>
                                            <span class="separator"></span>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <time datetime="PT3M">3 min</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside-component></aside-component>
            </div>
        `;
    }
}
customElements.define('blog-component', BlogComponent);
