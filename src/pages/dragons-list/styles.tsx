import styled from 'styled-components';

export const DragonList = styled.div`
  .DragonList,
  .Command,
  .dragon {
    display: flex;
  }
  .DragonList {
    flex-direction: column;
  }
  .Command {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .dragon {
    flex-grow: 1;
    background: #d5b8e3;
    margin: 3%;
    padding: 2%;
    color: #584c5e;
    font-family: ui-rounded !important;
  }
  .MuiFormControl-root {
    margin-right: 2%;
    margin-left: 2%;
  }
  hr {
    filter: blur(1px);
  }
`;
