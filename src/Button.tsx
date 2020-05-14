import React from 'react';
import styled from 'styled-components';
import btnOff from './img/btn-off.png';
import btnOffHover from './img/btn-off-hover.png';

const Btn = styled.button`
    display: block;
    background-image: url(${btnOff});
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;
    border: 0;
    width: 6rem;
    height: 2.9rem;
    cursor: pointer;
    &:hover {
        background-image: url(${btnOffHover});
    }
`;

const Button = () => {
    return <Btn></Btn>;
};

export default Button;
