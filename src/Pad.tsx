import React from 'react';
import styled from 'styled-components';
import padLarge from './img/pad-button-only.png';
import padLargeLit from './img/pad-button-only-blue.png';
import padLargeBacking from './img/pad-large-backing.png';
import padSmall from './img/pad-small.png';
import classNames from 'classnames';
// return React.useRef<HTMLInputElement | null>(null);

export type Audio = {
    name?: string;
    url: any;
    ref: any;
};

interface Props {
    keys: string[];
    high?: string;
    low?: string;
    notes: Audio[];
    number: number;
    value: number;
    onChange?: (v: any) => void;
}

const Note = styled.div`
    align-items: center;
    .high,
    .low {
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 1rem 0;
        position: absolute;
        width: 100%;
        text-align: center;
    }
    .high {
        top: -2.8rem;
    }
    .low {
        bottom: -2.5rem;
    }
`;

const MusicPad = styled.div`
    background-image: url(${padLargeBacking});
    background-repeat: no-repeat;
    background-size: contain;
    width: 12rem;
    height: 16rem;
    cursor: pointer;
    position: relative;
    &.small-pad {
        background-image: url(${padSmall});
        width: 12rem;
        height: 12rem;
        margin: 2rem 0;
        .pad-button {
            &:before {
                content: '';
                position: absolute;
                background-image: url(${padLargeLit});
                background-repeat: no-repeat;
                background-size: contain;
                top: -2.1rem;
                left: -1.6rem;
                right: -2.6rem;
                bottom: -2.2rem;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
            &.playing {
                &:before {
                    opacity: 1;
                }
            }
        }
    }
    .large-pad-button {
        position: absolute;
        background-image: url(${padLarge});
        background-repeat: no-repeat;
        background-size: contain;
        width: 16rem;
        left: -1.5rem;
        height: 16rem;
        top: -2rem;
        transition: top 0.3s ease-in-out;

        &:before {
            content: '';
            position: absolute;
            background-image: url(${padLargeLit});
            background-repeat: no-repeat;
            background-size: contain;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        &.position-0 {
            top: 1.5rem;
        }
        &.playing {
            &:before {
                opacity: 1;
            }
        }
    }
`;

const Number = styled.div`
    font-weight: 900;
    text-align: center;
    margin-top: 3rem;
    font-size: 2vw;
`;

const Pad = ({
    keys,
    notes,
    value,
    onChange = () => {},
    number,
    high,
    low,
}: Props) => {
    const padRef = React.useRef<HTMLInputElement | null>(null);

    const play = React.useCallback(
        (e) => {
            if (e.type === 'keydown' && !keys.includes(e.key)) return;
            const sound: any = notes[value].ref.current;
            if (sound === null) return;
            sound.currentTime = 0;
            sound.play();

            if (padRef === null || padRef.current === null) return;
            padRef.current.classList.add('playing');

            setTimeout(() => {
                if (padRef === null || padRef.current === null) return;
                padRef.current.classList.remove('playing');
            }, 300);
        },
        [keys, notes, value],
    );
    React.useEffect(() => {
        window.addEventListener('keydown', play);
        return () => window.removeEventListener('keydown', play);
    }, [play]); //initial mount

    return (
        <Note className={'note note--' + number}>
            <MusicPad
                className={notes.length > 1 ? 'pad' : 'small-pad'}
                onClick={(e) => play(e)}
            >
                {high && <div className="high">{high}</div>}
                <div
                    className={classNames(
                        notes.length > 1 ? 'large-pad-button' : 'pad-button',
                        'position-' + value,
                    )}
                    ref={padRef}
                ></div>
                {notes.map((note, i) => {
                    return <audio key={i} ref={note.ref} src={note.url} />;
                })}
                {low && <div className="low">{low}</div>}
            </MusicPad>

            <Number>{number}</Number>
        </Note>
    );
};

export default Pad;
