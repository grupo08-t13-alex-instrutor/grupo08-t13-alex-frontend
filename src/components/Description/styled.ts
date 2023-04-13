import styled from "styled-components";

export const StyledDescription = styled.div`
  width: 351px;
  height: 325px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: center;
  padding: 36px 28px;
  gap: 32px;
  background-color: ${(props) => props.theme.gray10};

  h6 {
    color: ${(props) => props.theme.gray1};
    margin: 0;
  }

  @media (min-width: 950px) {
    width: 751px;
    height: 213px;
    padding: 36px 44px;
  }
`;
