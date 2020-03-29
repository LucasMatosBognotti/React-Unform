import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
    padding: 40px 0;
  }
`;