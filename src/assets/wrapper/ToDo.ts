import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80px;
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #3b3a3a;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  .utilsContainer {
    display: flex;
    justify-content: space-between;

    button {
      margin-right: 7px;
    }
  }
`;