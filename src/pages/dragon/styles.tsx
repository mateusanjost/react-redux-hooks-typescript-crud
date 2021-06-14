import styled from "styled-components";

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ListDragon = styled.div`
  line-height: 0px;
  align-self: flex-end;
  .Dragon {
    display: flex;
    flex-flow: column-reverse;
    align-items: flex-end;
    flex-direction: column-reverse;
    .first-row-info {
      padding: 2%;
    }
    @media (max-width: 800px) {
     align-items: normal;
     .first-row-info {
      padding: 5%;
     }
    }
  }
  
  .MuiFormControl-root.MuiTextField-root {
    @media (max-width: 800px) {
      margin: 3%;
    }
    margin: 1%;
  }
  .createdAt {
    font-size: 12px;
  }
`;
