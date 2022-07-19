import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 90%;

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    margin-top: 4rem;
    img {
      width: 80%;
      height: 300px;
    }
  }

  .textContainer {
    margin-top: 1rem;
    text-align: center;
  }
`;
