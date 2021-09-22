import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';



const GlobalStyle = createGlobalStyle`

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
time, mark, audio, video, main {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	font-family: 'Roboto', sans-serif;
	vertical-align: baseline;
	box-sizing: border-box;
}
#__next{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100%;
}
h1 {
	font-size: 2rem;
	font-weight: bold;
	line-height: 1.5;
	color: ${theme.colors.headingOnLight};
}
pre{
	display: inline-block;
	color: ${theme.colors.primary};
}
html {
	background-color: #F9F9F9;	display: flex;
	min-height: 100%;
	

}
body{
	min-width: 100%;
	min-height: 100%;
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
body::-webkit-scrollbar {
  width: 5px;
	height: 5px;
}
 
body::-webkit-scrollbar-track {
	border-radius: 100px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
	border-radius: 100px;
  background-color: #054BBA;
  
}
`;

export default GlobalStyle;
