import React from 'react';
import styled from 'styled-components';
import panel from './img/panel.png';
import knob from './img/knob.png';
import knobHover from './img/knob-hover.png';
// import { useSelect } from 'downshift';
import { Scale } from './App';

interface Props {
    scale: Scale;
    scales: Array<Scale>;
    setScale: (s: Scale) => void;
}

const Settings = styled.div`
    display: flex;
    .panel {
        background-image: url(${panel});
        background-repeat: no-repeat;
        background-color: transparent;
        background-size: contain;
        border: 0;
        width: 65rem;
        height: 5.4rem;
        cursor: pointer;
        position: relative;
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
    .downshift-button {
        appearance: none;
        background-color: transparent;
        border: 0;
        font-family: 'VT323';
        color: #68e8fc;
        font-size: 1.5vw;
        cursor: pointer;
        text-transform: uppercase;
    }
    .current-scale {
        text-transform: uppercase;
        padding: 0.2rem 1rem;
    }
    .scale-list {
        overflow: scroll;
        height: 3rem;
        padding: 0 1rem;
        margin: 0 1rem;
        border-left: 2px dashed #fff;
        li {
            list-style-type: none;
            padding: 0.5rem 0;
            &:hover {
                background: rgba(0, 0, 0, 0.5);
            }
        }
    }
`;

const Panel = ({ scale, scales, setScale }: Props) => {
    const handleIncrementScale = React.useCallback(() => {
        console.log({ scaleid: scale.id });
        console.log(scales.length);

        const i = scales.findIndex((s) => {
            return s.id === scale.id;
        });
        if (i + 1 === scales.length) {
            setScale(scales[0]);
        } else {
            setScale(scales[i + 1]);
        }
        console.log({ i });
    }, [scale, scales]);

    return (
        <Settings>
            <div className="panel">
                <div className="current-scale">{scale.name}</div>
                <ul className="scale-list">
                    {scales.map((s: Scale) => {
                        return (
                            <li
                                className="scale"
                                key={s.id}
                                onClick={() => setScale(s)}
                            >
                                {s.id === scale.id && <span>-></span>} {s.name}
                            </li>
                        );
                    })}
                </ul>
                {/* <button
                    className="downshift-button"
                    {...getToggleButtonProps()}
                >
                    {selectedItem && selectedItem.name
                        ? selectedItem.name
                        : 'Choose a scale'}
                </button>
                <ul className="item-list" {...getMenuProps()}>
                    {isOpen &&
                        items.map((item, index) => (
                            <li
                                style={
                                    highlightedIndex === index
                                        ? { backgroundColor: '#bde4ff' }
                                        : {}
                                }
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item.name}
                            </li>
                        ))}
                </ul> */}
                {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
                {/* <div tabIndex={0} /> */}
            </div>
            <div className="knob" onClick={handleIncrementScale} />
        </Settings>
    );
};

export default Panel;
