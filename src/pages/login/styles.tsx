import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Container from "../../components/Container/styles";
export default styled(Button)`
  && {
    color: white;
    background-color: blue;
    height: 80px;
  }
`;


export const ContainerLogin = styled(Container)`
  .formLogin {
    display: grid;
  }
  .loginButtons {
    background: #8F57AB;
  }
  .MuiFormControl-root {
    margin-bottom: 2%;
    margin-top: 2%;
}
`;
