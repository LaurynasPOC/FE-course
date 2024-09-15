import { createGlobalStyle } from "styled-components";
import { desktop } from "./Breakpoints";

const reset = `
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, 
    big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, 
    center, dl, dt, dd, ol, ul, li, form, label, caption, table, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        scroll-behavior: smooth;
    } 
    
    img {
        border: 0;
        vertical-align: middle;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: "";
    }
    a:focus {
        outline: 0;
        text-decoration: none;
    }
    article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
        display: block;
    }
    button:focus {
        outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance: textfield;
    }
`;

export const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
        --purple: #845EC2;
        --blue: #5b24e7;
        --white-1: #f1f1f1;
        --white-2: #f2eefd;
        --white-3: #f7f4fd;
        --light-grey: #ccc;
        --grey: #a8a8a8;
        --black: #323232;
        
        --light-green:#00C0A3;
        --yellow: #ffc75f;
        --rose: #ff6f91;
        --orange: #ff9671;
        }

    *, *::after, *::before {
        box-sizing: border-box;
        transition: background-color .25s ease-out;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--white-2);
        min-height: 100vh; 
        overflow-x: hidden; 
    }

    *, button, body, input, textarea {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: inherit;
    }

    h1, h2, h3, h4 {
        font-weight: 600;
    }

    h1 {
        font-size: 72px;
    }

    h2 {
        font-size: 60px;
    }

    h3 {
        font-size: 48px;
    }

    h4 {
        font-size: 16px;
    }

    h5 {
        font-size: 24px;
    }

    p {
        font-size: 20px;
    }

    span, p, h3, h4 {
        line-height: 1.5;
    }

    @media ${desktop} {
        h1 {
            font-size: 52px;
        }
        h2 {
            font-size: 48px;
        }
        h3 {
            font-size: 34px;
        }
        h5 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`;
