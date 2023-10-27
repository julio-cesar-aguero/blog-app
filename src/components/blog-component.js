import { LitElement, html, css } from 'lit';
import './aside-component'
export class BlogComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                
            }
            .container{
                position: relative;
                z-index: 10;
                background-color: #f2f2f2ca;
                width: 80%;
                margin: 30px auto;
                padding: 3em 4em;
                border-radius: 10px;
            }
            .blog .h2{
                line-height: 1.3;
                margin-bottom: 3rem;
                text-align: center;
            }
            .blog-card-group{
                margin-bottom: 3rem;
            }
            .blog-card{
                padding: 10px;
                margin-bottom: 1rem;
                border-radius: 10px;
                backdrop-filter: blur(20px);
                box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
            }
            .blog-card:hover{
                transform: translateY(-2px);
                box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }
            .blog-card-banner{
                display: none;
            }
            .blog-content-wrapper{
                 padding: 10px 5px;
            }
            .blog-topic{
                background-color:#f2f2f2;
                color: #333333;
                font-weight: 600;
                padding: 0.25rem 1 rem;
                border-radius: 5px;
                margin-bottom: 1rem;
            }
            .blog-topic:hover{
                background-color: #333333;
                color: #f2f2f2;
            }
            .blog-card .h3{
                color: #333333;
                text-decoration: none;
                line-height: 1.4;
                margin-bottom: 1rem;
            }
            .blog-text,
            .profile-wrapper{
                display: none;
            }
            .blog .wrapper{
                
                display: flex;
                justify-content: space-between;
                align-items:center;
                flex-wrap: wrap;
                gap: 15px;
            }
            .blog .wrapper .h4{
                font-weight: 900;
                text-decoration: none;
                color: #696969;
                transition: color .5s cubic-bezier(0.075, 0.82, 0.165, 1);

            }
            .blog .wrapper .h4:hover{
                color: #1e56ff;
            }
            .blog .text-sm{
                color: #a4a4a4;
            }
            .blog .separator{
                background-color: #a4a4a4;
                margin-inline: 3px;
                margin: 0 3px;
                width: 3px;
                height: 3px;
                border-radius: 3px;
            }
            .blog .ion-icon{
                --ionicon-stroke-width: 50px;
            }
            aside-component{
                display: none;
            }
            /*Media Querys */
            @media(min-width: 550px){
                :root{
                    --fs-base: 09rem;
                }
                /* blog */
                .blog-card{
                    display: grid;
                    grid-template-columns: 3fr 4fr;
                    gap: 20px;
                }
                .blog-card-banner{
                    display: block;
                    overflow: hidden;
                    border-radius: 5px;

                }
                .blog-banner-img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .blog-text
            {
                display: block;
            }
            }
        `
    ];

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
