import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Heading-1-700 */

h1 {
  width: 338px;
  height: 56px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 56px;
  color: #212529;
  flex: none;
  order: 0;
  flex-grow: 0;
}

/* Heading-2-600 */

h2 {
  width: 272px;
  height: 45px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;
  color: #212529;
  flex: none;
  order: 1;
  flex-grow: 0;
}

/* Heading-3-600 */

h3 {
  width: 242px;
  height: 40px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #212529;
  flex: none;
  order: 2;
  flex-grow: 0;
}

/* Heading-3-500 */

h3.subtitle {
  width: 238px;
  height: 40px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #212529;
  flex: none;
  order: 3;
  flex-grow: 0;
}

/* Heading-4-600 */

h4 {
  width: 214px;
  height: 35px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #212529;
  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 0;
}

/* Heading-4-500 */

h4.subtitle {
  width: 210px;
  height: 35px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  color: #212529;
  flex: none;
  order: 5;
  flex-grow: 0;
}

/* Heading-5-600 */

h5 {
  width: 182px;
  height: 30px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #212529;
  flex: none;
  order: 6;
  flex-grow: 0;
}

/* Heading-5-500 */

h5.subtitle {
  width: 179px;
  height: 30px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}

/* Heading-6-600 */
.heading-6-600 {
    width: 152px;
    height: 25px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #212529;
    flex: none;
    order: 8;
    flex-grow: 0;
  }

/* Heading-6-500 */
.heading-6-500 {
  width: 149px;
  height: 25px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #868E96;;
  flex: none;
  order: 9;
  flex-grow: 0;
}

/* Heading-7-600 */
.heading-7-600 {
  width: 121px;
  height: 20px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #212529;
  flex: none;
  order: 10;
  flex-grow: 0;
}

/* Heading-7-500 */
.heading-7-500 {
  width: 119px;
  height: 20px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #212529;
  flex: none;
  order: 11;
  flex-grow: 0;
}

li{
  list-style: none;
}

ul{
  display: flex;
  gap: 1rem;
  
}

article{
  margin:0;
}

div{
  margin:0;
}

button{
  border:none;
  cursor:pointer;
} 

html, body{
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyle;
