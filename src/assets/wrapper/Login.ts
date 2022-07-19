import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    label {
      margin-bottom: 0.3rem;
    }

    input {
      padding: 10px;
      margin-bottom: 2rem;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #979797;
      color: #979797;
      background-color: #242323;
    }

    button {
      width: 100%;
      height: 50px;
      background-color: var(--primary);
      color: var(--white);
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  svg {
    font-size: 1.75rem;
  }

  .line {
    width: 100%;
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: var(--white);
    margin: 2.5rem 0;
  }

  .line::before {
    content: "";
    flex-grow: 1;
    margin: 0px 5px;
    background-color: var(--white);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  .line::after {
    content: "";
    flex-grow: 1;
    margin: 0px 5px;
    background-color: var(--white);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  .oauthBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin-bottom: 2rem;
    color: white;
    background-color: var(--black);
    border: 1px solid #8875ff;
    border-radius: 5px;
    font-size: 1rem;
    svg {
      margin-right: 10px;
    }
  }

  footer {
    margin-top: 2rem;
    text-align: center;
    font-weight: 400;
    span {
      color: #979797;
    }
  }
`;