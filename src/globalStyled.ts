import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
 
/* BRAND */
:root {
  --brand-1: #4529E6;
  --brand-2: #5126EA;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD;
}

/* Grey Scale */
:root {
  --gray-0: #0B0D0D;
  --gray-1: #212529;
  --gray-2: #495057;
  --gray-3: #868E96;
  --gray-4: #ADB5BD;
  --gray-5: #CED4DA;
  --gray-6: #DEE2E6;
  --gray-7: #E9ECEF;
  --gray-8: #F1F3F5;
  --gray-9: #F8F9FA;
  --gray-10: #FDFDFD;
  --white-fixed: #FFFFFF;
}

/* Feedback */
:root {
  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;
  --success-1: #18794E;
  --success-2: #CCEBD7;
  --success-3: #DDF3E4;
}

/* Random Profile */
:root {
  --random-1: #E34D8C;
  --random-2: #C04277;
  --random-3: #7D2A4D;
  --random-4: #7000FF;
  --random-5: #6200E3;
  --random-6: #36007D;
  --random-7: #349974;
  --random-8: #2A7D5F;
  --random-9: #153D2E;
  --random-10: #6100FF;
  --random-11: #5700E3;
  --random-12: #30007D;
}
  

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

`;

export default GlobalStyle;