import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100vw;
  height: 620px;
  min-width: 300px;

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
    overflow: hidden;
    gap: 50px;

    .bannerText {
      width: 90%;
      text-align: center;
      position: absolute;
      top: 100px;

      h3 {
        font-size: 2rem;
        color: ${(props) => props.theme.gray10};
        display: inline-block;
        width: 100%;
      }

      h3.subtitle {
        font-size: 1.5rem;
        width: 100%;
        margin-top: -20px;
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

  @media (min-width: 720px) {
    height: 300px;
    .container {
      height: 573px;
      width: 100%;
      top: -80px;
      .bannerText {
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 20px;

        h3 {
          margin: 4px;
        }
      }
    }
  }
`;
