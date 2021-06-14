import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.App {
  text-align: center;
}
svg:hover {
  path {
    fill: white;
  }
}
svg {
  cursor: pointer;
    padding-right: 10% !important;
    align-self: flex-end;
      path {
        fill: #4F305E;
      }
    }
    svg.svg-inline--fa.fa-dragon.fa-w-20.fa-5x{
    align-self: center;
  }

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #4F305E;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.MuiInputBase-input, .MuiInputBase-input:-webkit-autofill {
  background-color: transparent !important;
  box-shadow: none !important;
  margin: 2% !important;
}

.App-link {
  color: #61dafb;
}

ul {
  padding: 0;
}
li {
  list-style: none;
  flex-grow: 2;
}

span {
  cursor: pointer;

}
li:hover {
  color: #c441b7;
  cursor: pointer;
}

@keyframes nome {
    0% {
        filter: saturate(1) hue-rotate(0deg);
    }
    100% {
        filter: saturate(10) hue-rotate(360deg);
    }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
