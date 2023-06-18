import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
  background: #3a0b72;
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
