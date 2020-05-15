import React from 'react';
import styled from 'styled-components';
import panel from './img/panel.png';
import knob from './img/knob.png';
import knobHover from './img/knob-hover.png';
import { useSelect } from 'downshift';

type Props = {
    scale: any;
    setScale: any;
};

type Item = {
    name: string;
    notes: number[];
};

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
`;

const Panel = ({ scale, setScale }: Props) => {
    const items: Item[] = [
        { name: 'locrian', notes: [0, 0, 0, 0, 0, 0] },
        { name: 'phrygian', notes: [0, 0, 0, 1, 0, 0] },
        { name: 'aeolian a.k.a. natural minor', notes: [1, 0, 0, 1, 0, 0] },
        { name: 'dorian', notes: [1, 0, 0, 1, 1, 0] },
        { name: 'myxolydian', notes: [1, 1, 0, 1, 1, 0] },
        { name: 'ionian a.k.a. Major', notes: [1, 1, 0, 1, 1, 1] },
        { name: 'lydian', notes: [1, 1, 1, 1, 1, 1] },
    ];

    const itemToString = React.useCallback((item) => {
        if (item && item.name) {
            return item.name;
        } else {
            return '';
        }
    }, []);

    const onSelectedItemChange = React.useCallback(
        (changes: any) => {
            console.log(changes.selectedItem);
            setScale([...changes.selectedItem.notes]);
        },
        [setScale],
    );

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({ items, itemToString, onSelectedItemChange });

    return (
        <Settings>
            <div className="panel">
                <div>
                    <button
                        className="downshift-button"
                        {...getToggleButtonProps()}
                    >
                        {selectedItem && selectedItem.name
                            ? selectedItem.name
                            : 'Choose a scale'}
                    </button>
                    <ul {...getMenuProps()}>
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
                    </ul>
                    {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
                    <div tabIndex={0} />
                </div>
            </div>
            <div className="knob" />
        </Settings>
    );
};

export default Panel;
