import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  background-color: #3b3a3a;
  width: 100%;
  height: 105px;
  position: fixed;
  bottom: 0;
  .tab {
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: white;
    }
    p {
      margin: 4px;
      font-size: 0.75rem;
    }
    .addBtn {
      width: 70px;
      height: 70px;
      color: white;
      background-color: var(--primary);
      border-radius: 50%;
      font-size: 3rem;
      position: absolute;
      bottom: 70px;
    }
  }
`;