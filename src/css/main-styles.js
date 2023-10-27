import { css } from "lit";
export default css`
  .main__grid {
    overflow: hidden;
    display: grid;
    grid-template-areas: "img img" "text text";
    grid-template-columns: 5% 1fr 5%;
  }
  .main__article {
    padding: 56px 0;
    text-align: center;
    grid-area: text;
  }
  .main__title {
    font-size: 2rem;
  }
  .main__paragraph {
    line-height: 1.5;
    margin: 1.5em 0;
  }
  .main__cta {
    background-color: var(--almost-black);
    color: white;
    display: inline-block;
    padding: 0.8em 1.5em;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
  }
  .main__picture {
    grid-area: img;
    max-width: 400px;
    margin: 0 auto;
  }
  .main__img {
    width: 100%;
  }
  .main__brands {
    display: grid;
    gap: 1em;
    grid-auto-flow: column;
    grid-auto-columns: minmax(30px, 100px);
    align-items: center;
    justify-content: space-evenly;
    margin: 40px 0 80px;
  }
  .main__brand {
    width: 100%;
  }
  @media (min-width: 768px) {
    .main__grid{
      margin: 0 auto;
      max-width: 1200px;
      width: 90%;
      gap: 2em;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "text img";
      padding: 70px 0;
    }
    .main__picture{
      max-width: 400px;
    }
    .main__img{
      height: 100%;
    }
    .main__article{
      text-align: left;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    .main__brands{
      margin: auto 0 0 0;
    }
    .main__texts{
      margin: auto 0;
    }
    .main__title{
      font-size: 3.5rem;
    }
    .main__paragraph{
      margin: 2em 0;
    }
  }
`;
