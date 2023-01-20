import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background: #360033;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
}

a {
  list-style: none;
  text-decoration: none;
}

h1,
h2,
h3 {
  margin: 0;
}

p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
}
`;

export default GlobalStyle;