import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import BtnActive from './img/btn-on-red.png';
import { Scale } from './App';

interface Props {
    scale: Scale;
}

interface Track {
    ref: React.RefObject<HTMLAudioElement> | null;
    scaleId: string;
}

const BackingBtns = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .active {
        background-image: url(${BtnActive});
    }
`;

const Backing = ({ scale }: Props) => {
    // tracks={[
    //     {
    //         url: require('./audio/cdrone.mp3'),
    //         ref: cdrone,
    //     },
    //     {
    //         url: require('./audio/c_maj_chords.wav'),
    //         ref: cdrone,
    //     },
    //     {
    //         url: require('./audio/cdrone.mp3'),
    //         ref: cdrone,
    //     },
    // ]}
    // const tracks = { track1: [{ url: require('./audio/c.wav'), ref: cnote }] };
    const locrian = React.useRef<HTMLAudioElement | null>(null);
    const phrygian = React.useRef<HTMLAudioElement | null>(null);
    const aeolian = React.useRef<HTMLAudioElement | null>(null);
    const dorian = React.useRef<HTMLAudioElement | null>(null);
    const myxolydian = React.useRef<HTMLAudioElement | null>(null);
    const ionian = React.useRef<HTMLAudioElement | null>(null);
    const lydian = React.useRef<HTMLAudioElement | null>(null);

    const droneRef = React.useRef<HTMLAudioElement | null>(null);

    const tracks: Array<Track> = [
        {
            ref: locrian,
            scaleId: 'locrian',
        },
        {
            ref: phrygian,
            scaleId: 'phrygian',
        },
        {
            ref: aeolian,
            scaleId: 'aeolian',
        },
        {
            ref: dorian,
            scaleId: 'dorian',
        },
        {
            ref: myxolydian,
            scaleId: 'myxolydian',
        },
        {
            ref: ionian,
            scaleId: 'ionian',
        },
        {
            ref: lydian,
            scaleId: 'lydian',
        },
    ];
    // const bTracks: Array<Track> = [];

    const [selectedOption, setSelectedOption] = React.useState(0);

    const [
        selectedTrackRef,
        setSelectedTrackRef,
    ] = React.useState<React.RefObject<HTMLAudioElement> | null>(null);

    const playBackingTrack = React.useCallback(
        (i) => {
            console.log('playBackingTrack- Backing.js');

            // if (i === selectedOption) return;

            // update selected option number
            setSelectedOption(i);
            if (selectedTrackRef && selectedTrackRef.current) {
                selectedTrackRef.current.pause();
            }

            switch (i) {
                case 1:
                    // drone
                    if (droneRef && droneRef.current) droneRef.current.play();
                    setSelectedTrackRef(droneRef);
                    break;
                case 2:
                    // A tracks
                    const newTrack: Track | undefined = tracks.find(
                        (t) => t.scaleId === scale.id,
                    );
                    if (newTrack && newTrack.ref && newTrack.ref.current) {
                        setSelectedTrackRef(newTrack.ref);
                        newTrack.ref.current.play();
                    }
                    break;
                case 3:
                    // @TODO creat more tracks
                    // B tracks
                    break;
                default:
                // don't start a new tune
            }
        },
        [scale, selectedTrackRef, tracks, selectedOption],
    );

    React.useEffect(() => {
        console.log('use effect - Backing.js');
        playBackingTrack(selectedOption);
        return () => {};
    }, [scale]);

    // const options = ['off', 'drone', 'track 1', 'track 2'];
    const options = ['off', 'drone', 'track 1'];

    return (
        <BackingBtns>
            {options.map((opt: string, i: number) => {
                return (
                    <Button
                        key={i}
                        onClick={() => playBackingTrack(i)}
                        className={selectedOption === i ? 'active' : ''}
                        title={opt}
                    />
                );
            })}

            <audio ref={droneRef} src={require('./audio/cdrone.mp3')} loop />

            {tracks.map((track: Track, i: number) => {
                return (
                    <audio
                        key={i}
                        ref={track.ref}
                        src={require(`./audio/${track.scaleId}.mp3`)}
                        loop
                    />
                );
            })}
        </BackingBtns>
    );
};

export default Backing;
