import styled from "styled-components";

const Li = styled.li`
  min-width: 278px;


  .imgCard{
    cursor: pointer;
  }

  .teste {
    background-color: ${(props) => props.theme.gray7};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;

    img {
      width: 250px;
      height: 152px;
    }
  }

  section {
    display: flex;
    flex-direction: column-reverse;

    p {
      color: ${(props) => props.theme.gray2};
      font-family: Inter;
      font-weight: 400;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Inter;

    div {
      gap: 10px;
      div {
        background-color: ${(props) => props.theme.brand4};
      }
      border-radius: 4px;
      color: ${(props) => props.theme.brand1};
      padding: 2px;
    }
  }

  article {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    margin-bottom: 5px;
    font-family: Inter;
    font-weight: 500;

    article {
      background-color: ${(props) => {
    const colorsRandom = [
      props.theme.random1,
      props.theme.random2,
      props.theme.random3,
      props.theme.random4,
      props.theme.random5,
      props.theme.random6,
      props.theme.random7,
      props.theme.random8,
      props.theme.random9,
      props.theme.random10,
      props.theme.random11,
      props.theme.random12,
    ];

    const randomColorIndex = Math.floor(Math.random() * 12);

    const color = colorsRandom[randomColorIndex];

    return color;
  }};
      color: ${(props) => props.theme.whiteFixed};
      border-radius: 100%;
      height: 2rem;
      width: 2rem;
      align-items: center;
      justify-content: center;
    }

    span {
      color: ${(props) => props.theme.gray2};
    }
  }
`;

export default Li;
