import React from 'react';
import './App.css';
import styled from 'styled-components';
import Pad from './Pad';
import Panel from './Panel';
import Button from './Button';

const Instrument = styled.div`
    background: linear-gradient(#181818, #303030);
    border-radius: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    padding: 2rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    .settings {
        display: flex;
        > div {
            flex: 0 0 25%;
            width: 25%;
        }
    }
    .notes {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }
    .title {
        font-size: 5rem;
    }
    .title--med {
        font-size: 3rem;
        position: relative;
        text-transform: uppercase;
        font-weight: 900;
        &:after {
            content: '';
            width: 100%;
            position: absolute;
            border: 2px solid #fff;
        }
    }
    .title--small {
        font-size: 2rem;
    }
    .panel {
        font-family: 'VT323', sans-serif;
    }
    .buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

function App() {
    const [second, setSecond] = React.useState(1);
    const [third, setThird] = React.useState(1);
    const [fourth, setFourth] = React.useState(0);
    const [fifth, setFifth] = React.useState(1);
    const [sixth, setSixth] = React.useState(1);
    const [seventh, setSeventh] = React.useState(1);

    const setScale = React.useCallback(
        (scaleNotes) => {
            setSecond(scaleNotes[0]);
            setThird(scaleNotes[1]);
            setFourth(scaleNotes[2]);
            setFifth(scaleNotes[3]);
            setSixth(scaleNotes[4]);
            setSeventh(scaleNotes[5]);
        },
        [setSecond, setThird, setFourth, setFifth, setSixth, setSeventh],
    );

    const locrian = React.useCallback(() => {
        setScale([0, 0, 0, 0, 0, 0]);
    }, [setScale]);

    const phrygian = React.useCallback(() => {
        setScale([0, 0, 0, 1, 0, 0]);
    }, [setScale]);

    const aeolian = React.useCallback(() => {
        setScale([1, 0, 0, 1, 0, 0]);
    }, [setScale]);

    const dorian = React.useCallback(() => {
        setScale([1, 0, 0, 1, 1, 0]);
    }, [setScale]);

    const myxolydian = React.useCallback(() => {
        setScale([1, 1, 0, 1, 1, 0]);
    }, [setScale]);

    const ionian = React.useCallback(() => {
        setScale([1, 1, 0, 1, 1, 1]);
    }, [setScale]);

    const lydian = React.useCallback(() => {
        setScale([1, 1, 1, 1, 1, 1]);
    }, [setScale]);

    const cnote = React.useRef(null);
    const cshnote = React.useRef(null);
    const dnote = React.useRef(null);
    const dshnote = React.useRef(null);
    const enote = React.useRef(null);
    const fnote = React.useRef(null);
    const fshnote = React.useRef(null);
    const gnote = React.useRef(null);
    const gshnote = React.useRef(null);
    const anote = React.useRef(null);
    const ashnote = React.useRef(null);
    const bnote = React.useRef(null);
    const c2note = React.useRef(null);

    return (
        <div className="App">
            <header className="App-header"></header>

            <Instrument>
                <h1 className="title">Scale Explorer</h1>
                <div className="settings">
                    <div className="settings--scale">
                        <h4 className="title--med">Scale</h4>
                        <Panel />
                    </div>
                    <div className="settings--backing">
                        <h4 className="title--med">Backing</h4>
                        <div className="buttons">
                            <Button />
                            <Button />
                            <Button />
                            <Button />
                        </div>
                    </div>
                    <div /> <div />
                </div>
                <div className="notes">
                    <div className="note--1">
                        <Pad
                            keys={['a']}
                            notes={[
                                {
                                    url: require('./audio/c.wav'),
                                    ref: cnote,
                                },
                            ]}
                            value={0}
                        />
                    </div>
                    <div className="note--2">
                        <Pad
                            keys={['s']}
                            notes={[
                                {
                                    url: require('./audio/c+.wav'),
                                    ref: cshnote,
                                },
                                {
                                    url: require('./audio/d.wav'),
                                    ref: dnote,
                                },
                            ]}
                            value={second}
                            onChange={setSecond}
                        />
                    </div>
                    <div className="note--3">
                        <Pad
                            keys={['d']}
                            notes={[
                                {
                                    url: require('./audio/d+.wav'),
                                    ref: dshnote,
                                },
                                {
                                    url: require('./audio/e.wav'),
                                    ref: enote,
                                },
                            ]}
                            value={third}
                            onChange={setThird}
                        />
                    </div>
                    <div className="note--4">
                        <Pad
                            keys={['f']}
                            notes={[
                                {
                                    url: require('./audio/f.wav'),
                                    ref: fnote,
                                },
                                {
                                    url: require('./audio/f+.wav'),
                                    ref: fshnote,
                                },
                            ]}
                            value={fourth}
                            onChange={setFourth}
                        />
                    </div>
                    <div className="note--5">
                        <Pad
                            keys={['g']}
                            notes={[
                                {
                                    url: require('./audio/f+.wav'),
                                    ref: fshnote,
                                },
                                {
                                    url: require('./audio/g.wav'),
                                    ref: gnote,
                                },
                            ]}
                            value={fifth}
                            onChange={setFifth}
                        />
                    </div>
                    <div className="note--6">
                        <Pad
                            keys={['h']}
                            notes={[
                                {
                                    url: require('./audio/g+.wav'),
                                    ref: gshnote,
                                },
                                {
                                    url: require('./audio/a.wav'),
                                    ref: anote,
                                },
                            ]}
                            value={sixth}
                            onChange={setSixth}
                        />
                    </div>
                    <div className="note--7">
                        <Pad
                            keys={['j']}
                            notes={[
                                {
                                    url: require('./audio/a+.wav'),
                                    ref: ashnote,
                                },
                                {
                                    url: require('./audio/b.wav'),
                                    ref: bnote,
                                },
                            ]}
                            value={seventh}
                            onChange={setSeventh}
                        />
                    </div>
                    <div className="note--8">
                        <Pad
                            keys={['k']}
                            notes={[
                                {
                                    url: require('./audio/c2.wav'),
                                    ref: c2note,
                                },
                            ]}
                            value={0}
                        />
                    </div>
                </div>
            </Instrument>
        </div>
    );
}

export default App;
