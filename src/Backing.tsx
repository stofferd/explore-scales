import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import BtnActive from './img/btn-on-red.png';
import { Audio } from './Pad';

type Props = {
    tracks: Audio[];
};

const BackingBtns = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .active {
        background-image: url(${BtnActive});
    }
`;

const Backing = ({ tracks }: Props) => {
    const [selectedOption, setSelectedOption] = React.useState(0);
    const handleClick = React.useCallback(
        (i) => {
            if (i === selectedOption) return;

            // update selected option number
            setSelectedOption(i);

            if (selectedOption !== 0) {
                const oldSound: any = tracks[selectedOption].ref.current;
                if (oldSound !== null) oldSound.pause();
            }
            if (i !== 0) {
                const sound: any = tracks[i].ref.current;
                if (sound === null) return;
                sound.currentTime = 0;
                sound.play();
            }
        },
        [tracks, selectedOption],
    );

    const options = ['off', 'drone', 'track 1', 'track 2'];
    return (
        <BackingBtns>
            {options.map((opt: string, i: number) => {
                return (
                    <>
                        <Button
                            key={i}
                            onClick={() => handleClick(i)}
                            className={selectedOption === i ? 'active' : ''}
                            title={opt}
                        />
                    </>
                );
            })}

            {tracks.map((track, i) => {
                return <audio key={i} ref={track.ref} src={track.url} loop />;
            })}
        </BackingBtns>
    );
};

export default Backing;
