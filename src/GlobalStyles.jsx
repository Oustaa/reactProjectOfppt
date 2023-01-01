import { createGlobalStyle } from "styled-components";

const clobalStyles = createGlobalStyle`
 :root{
  --primaryGray : #333;
 }

 * {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing:border-box;
}

body {
	line-height: 1;
 font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 background-color:var(--primaryGray);
 color:#fff;
	min-height:100vh;
}

ol, ul {
	list-style: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a{
	color:inherit;
	text-decoration: none;
}

button{
	background-color:transparent;
	color:inherit;
}
button:disabled{
 cursor: not-allowed !important;
	opacity: 0.5;
}
button:hover{
	background-color:#fff;
	color:#333;
	cursor:pointer;
	border-radius:.25rem;
}

.hide{
  animation: hideMessage .500s forwards cubic-bezier(0.28,-0.31, 0.6, 1.41);
}

@keyframes hideMessage {
    0% {
       transform: translateY(0%);
    }
    100% {
       transform: translateY(100%);
    }
}

@keyframes showMessage {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
}
`;

export default clobalStyles;
