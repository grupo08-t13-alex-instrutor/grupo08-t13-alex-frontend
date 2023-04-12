import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100vw;
  min-width: 375px;
  height: 625.33px;
  /* position: fixed; */

  .container {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    overflow: hidden;
    gap: 50px;

    .bannerText {
      width: 90%;
      text-align: center;

      h3 {
        font-size: 2rem;
        color: ${(props) => props.theme.gray10};
        display: inline-block;
        width: 100%;
      }

      h3.subtitle {
        font-size: 1.5rem;
      }
      z-index: 100;
    }

    .mask {
      width: 100vw;
      height: 100%;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    }

    img {
      width: 100%;
      min-width: 500px;
      transform: translate(-30px);
      z-index: -1;
      max-width: 1080px;
    }
  }

  @media (min-width: 180px) {
    height: 537px;
  }
`;
