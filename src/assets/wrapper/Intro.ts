import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 1.5rem;

  img {
    margin: 2rem;
    padding: 1rem;
    width: 100%;
    height: 50%;
  }

  div {
    margin-bottom: 4rem;
    h3 {
      margin-bottom: 3rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  a {
    width: 70%;
    height: 50px;
  }

  button {
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    color: var(--white);
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
