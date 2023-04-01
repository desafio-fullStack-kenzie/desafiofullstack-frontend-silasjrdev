import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

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
time, mark, audio, video,  input {
	margin: 0;
	padding: 0;
	border: 0;
	/* font-size: 100%; */
	/* font: inherit; */
	vertical-align: baseline;
	list-style: none;
    	color: black;
    	text-decoration: none;
    	outline: none;
    	border: none;
    	box-sizing: border-box;
        font-family: 'Inter', sans-serif;
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

select:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid var(--color-grey-0);
    outline: 0;
} 

input:focus {
	box-shadow: 0 0 0 0;
	border: 1px solid var(--color-grey-0);
	outline: 0;
}

textarea:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

button{
	cursor: pointer;
}

:root{

	//Primary Palette
	--color-primary: 	      #FF577F;
	--color-primary-Focus:    #FF427F;
	--color-primary-negative: #59323F;

	//Grey Scale Palette

	--color-white:	  #ffffff;
	--color-grey-0:   #F8F9FA;
	--color-grey-1:   #868E96;
	--color-grey-2:   #343B41;
	--color-grey-3:   #212529;
	--color-grey-4:   #121214;

    //Color Semaforicas

    --color-sucess: #3FE864;
    --color-failed: #E83F5B;


	//Typography

	--font-inter: font-family: 'Inter', sans-serif;
	--font-size-26px: 26px;
	--font-size-22px: 22px; 
	--font-size-18px: 18px; 
	--font-size-14px: 14px; 
	--font-size-16px: 16px;
	--font-size-12px: 12px;
    --font-size-10px:  10px;  

	--font-weight-700:700;
	--font-weight-600:600;
	--font-weight-400:400;

}


`