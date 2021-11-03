import { css } from 'styled-components';

export const large = (props) => {
    return css`
        @media only screen and (max-width:1250px) {
        ${props}
    }
    `;
};

export const medium = (props) => {
    return css`
        @media only screen and (max-width:700px) {
        ${props}
    }
    `;
};
export const tablet = (props) => {
    return css`
        @media only screen and (max-width:500px) {
        ${props}
    }
    `;
};
export const mobile = (props) => {
    return css`
        @media only screen and (max-width:380px) {
        ${props}
    }
    `;
};