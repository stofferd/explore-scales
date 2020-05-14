import React from 'react';
import styled from 'styled-components';
import panel from './img/panel.png';
import knob from './img/knob.png';
import knobHover from './img/knob-hover.png';

const Settings = styled.div`
    display: flex;
    .panel {
        background-image: url(${panel});
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: contain;
        border: 0;
        width: 40rem;
        height: 8.5rem;
        cursor: pointer;
    }
    .knob {
        background-image: url(${knob});
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: contain;
        border: 0;
        width: 8rem;
        height: 8rem;
        cursor: pointer;
        &:hover {
            background-image: url(${knobHover});
        }
    }
`;

const Panel = () => {
    return (
        <Settings>
            <div className="panel">Major scale</div>
            <div className="knob" />
        </Settings>
    );
};

export default Panel;
