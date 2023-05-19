import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input,select {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
  border:none;
  background:transparent;
	cursor:pointer;
}
input{
  outline:none;
}
h1, h2, h3, h4, h5, h6, p{
	line-height:150%
} 
`;
export const GlobalStyle = createGlobalStyle`
:root{
	--color-primary:#FF577F;
	--color-primary-focus:#FF427F;
	--color-primary-negative:#59323F;
  --grey4:#121214;
  --grey3:#212529;
  --grey2:#343B41;
  --grey1:#868E96;
  --grey0:#F8F9FA;
  --success: #3FE864;
  --failure:#E83F5B;
}
body{
	font-family: 'Inter', sans-serif;
  background-color: var(--grey4);
  color:white;
}
legend{
  font-size: 1.125rem;
  color: var(--grey0);
  font-weight: 700;
  margin-bottom:2rem;
  margin-inline: auto;
}
label{
  font-size:0.75rem;
  color: var(--grey0);
  align-self:flex-start;
}
input, select{
  background-color: var(--grey2);
  color: var(--grey1);
  height: 3rem;
  border-radius:0.25rem;
  width:100%;
  padding-inline-start:0.8rem;
  border: 0.0762rem solid transparent;
}
input:focus, select:focus{
  border: 0.0762rem solid var(--grey0);
  color: var(--grey0);
}

small{
  color: var(--grey1);
  font-size: 0.75rem;
}
button, a{
  font-size: 1rem;
  color: white;
  height:3rem;
  border-radius:0.25rem;
  padding-inline:1rem;
  width:100%;
  transition:.4s;
}
form{
  padding-block:2rem;
  background-color: var(--grey3);
  display:flex;
  align-items:center;
  justify-content:center;
  width:90%;
  max-width:370px;
  margin: auto;
  border-radius:0.25rem;
}

fieldset{
  width:85%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  gap:1.25rem;
}
main{
  margin-top:1rem;
}
span{
  align-self:flex-start;
  font-size:0.6875rem;
  color: var(--failure);
}
h2,h3{
  color:var(--grey0);
}
h2{
  font-weight:700;
  font-size:1.125rem;
}
h3{
  font-size:1rem;
}
::-webkit-scrollbar{
  display:none;
}
section{
  margin-bottom:1rem;
}
@media(min-width:1024px){
  main{
    margin-top:2rem;
  }
  section{
    margin-bottom:0;
  }
}

`;
