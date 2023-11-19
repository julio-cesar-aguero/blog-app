import { css } from "lit";
export default css`
.container{
    position: relative;
    z-index: 10;
    background-color: var(--bg-card-color);
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
.project__tags{
    display: flex;
    justify-content: space-around;
    margin: 0.2em 0;
    width: 100%;
}
.project__tag{
    transition: var(--transition);
    background-color: var(--primary-color);
    padding: 0.3em 0.6em;
    margin: 0.6rem;
    border-radius: var(--border-radius);
    color: var(--bg-color);
}

.blog-card-group{
    display: grid;
    grid-template-columns: auto;
    margin-bottom: 3rem;
}
.blog-card{
    position: relative;
    display: inline-block;
    max-width: 500px;
    margin: 1em auto;
    width: 100%;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 7s cubic-bezier();
}
.blog-card:hover{
    transform: scale(1.2);
    transform: translateY(-2px);
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.blog-card-banner{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
}
.blog-banner-img{
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
}
.group-button__actions{
    position: absolute;
    top: 5%;
    left: 2%;
    width: 100%;
}
.group-button__actions .btn__action{
    width: 50px;
    border-radius: 50%;
    border: 5px solid var(--primary-color);
}
.group-button__actions .btn__action{
    margin: 0 0.5em;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: scale(1.1);
    opacity: 0.9;
    cursor: pointer;
    transition: all .5s cubic-bezier();
}
.group-button__actions .btn__action:hover{
    opacity: 1;
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
.blog-content-wrapper{
     padding: 10px 5px;
}
.blog-topic{
    background-color: var(--bg-color);
    color: var(--text-color);
    font-weight: 600;
    padding: 0.25rem 1 rem;
    border-radius: 5px;
    margin-bottom: 1rem;
}
.blog-topic:hover{
    background-color: var(--bg-color);
    color: var(--text-color);
}
.blog-card .h3{
    color: var(--text-color);
    text-decoration: none;
    line-height: 1.4;
    margin-bottom: 1rem;
}
.blog-card-banner{
    
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
    color: var(--text-color);
    transition: color .5s cubic-bezier(0.075, 0.82, 0.165, 1) !important;

}
.blog .wrapper .h4:hover{
    color: var(--primary-color);
}
.blog .text-sm{
    color: var(--text-color);
}
.blog .separator{
    background-color: var(--bg-color);
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
@media(min-width: 890px){
    :root{
        --fs-base: 09rem;
    }
    /* blog */
    .blog-card{
        max-width: unset;
        display: grid;
        grid-template-columns: 3fr 4fr;
        gap: 40px;
    }
    .blog-card-banner{
        width: 100%;        
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        border-radius: 5px;

    }
    .blog-banner-img{
        display: block;
        border-radius: 5px;
        max-width: 500px;
        width: 100%;
        object-fit: cover;
    }
    .blog-text
{
    display: block;
}
}
`;
