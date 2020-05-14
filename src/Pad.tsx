import React from 'react';
import styled from 'styled-components';
import padLargeBacking from './img/pad-large-backing.png';
import padSmall from './img/pad-small.png';
// return React.useRef<HTMLInputElement | null>(null);

type Note = {
    url: any;
    ref: any;
};

type Props = {
    keys: string[];
    notes: Note[];
    value: number;
    onChange?: (v: number) => void;
};

const MusicPad = styled.div`
    background-image: url(${padLargeBacking});
    background-repeat: no-repeat;
    background-size: contain;
    width: 10rem;

    height: 10rem;
    cursor: pointer;
    &.small-pad {
        background-image: url(${padSmall});
    }
`;

const Pad = ({ keys, notes, value, onChange }: Props) => {
    React.useEffect(() => {
        console.log('mount!');
        window.addEventListener('keydown', keyDown);
        return () => window.removeEventListener('keydown', keyDown);
    }, []); //initial mount

    const play = React.useCallback(() => {
        const sound: any = notes[value].ref.current;
        if (sound === null) return;
        sound.play();
    }, [notes, value]);

    const keyDown = React.useCallback(
        (e) => {
            if (keys.includes(e.key)) {
                play();
            }
        },
        [keys, play],
    );

    return (
        <>
            <MusicPad
                className={notes.length > 1 ? 'pad' : 'small-pad'}
                onClick={() => play()}
            >
                {notes.map((note, i) => {
                    return <audio key={i} ref={note.ref} src={note.url} />;
                })}
            </MusicPad>
        </>
    );
};

export default Pad;
