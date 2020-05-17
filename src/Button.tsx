import React from 'react';
import styled from 'styled-components';
import btnOff from './img/btn-off.png';
import btnOffHover from './img/btn-off-hover.png';

interface Props {
    className?: string;
    onClick: (v: any) => void;
    title?: string;
}

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
    text-align: left;
    &:hover {
        background-image: url(${btnOffHover});
    }
    .title--small {
        position: relative;
        top: 1rem;
    }
`;

const Button = ({ className = '', onClick, title = '' }: Props) => {
    return (
        <Btn className={className} onClick={onClick} title={title}>
            <h4 className="title--small">{title}</h4>
        </Btn>
    );
};

export default Button;
