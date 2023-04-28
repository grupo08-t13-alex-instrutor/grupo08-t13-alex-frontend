import styled from "styled-components";

const Aside = styled.aside`
  width: 281px;
  margin-left: 2rem;
  margin-bottom: 3rem;

  #cleanFilter {
    color: ${(props) => props.theme.whiteFixed};
    background: ${(props) => props.theme.brand2};
    width: 279px;
    height: 48px;
    margin-top: 3rem;
  }

  h4 {
    margin-top: 1.5rem;
  }

  div {
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    width: 258px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme.gray2};
      cursor: pointer;
      width: 90%;
    }
  }

  .price,
  .km {
    display: block;

    button {
      color: ${(props) => props.theme.gray2};
      background: ${(props) => props.theme.gray5};
      width: 125px;
      height: 37px;
    }

    .max {
      margin-left: 0.5rem;
    }
  }
`;

export default Aside;
