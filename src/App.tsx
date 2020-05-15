import React from 'react';
import './App.css';
import styled from 'styled-components';
import Pad from './Pad';
import Panel from './Panel';
import Backing from './Backing';

const Instrument = styled.div`
    background: linear-gradient(#181818, #303030);
    border-radius: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    padding: 2rem 4rem 4rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    .settings {
        display: flex;
        > div {
            flex: 0 0 25%;
            width: 25%;
            padding-right: 5%;
        }
    }
    .notes {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
    }
    .note {
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }

    .title {
        font-size: 3vw;
        font-weight: 900;
    }
    .title--med {
        font-size: 1.5vw;
        position: relative;
        text-transform: uppercase;
        font-weight: 900;
    }
    .title--small {
        text-transform: uppercase;
        font-size: 0.8vw;
        color: #fff;
    }
    .divider {
        flex: 1 0 auto;
        border: 0;
        border-top: 2px solid #fff;
        width: 50%;
        margin-left: 5%;
    }
    .panel {
        font-family: 'VT323', sans-serif;
    }
`;

function App() {
    const [scale, setScale] = React.useState([1, 1, 0, 1, 1, 1]);

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
    const cdrone = React.useRef(null);

    console.log({ scale });

    const pads = [
        {
            keys: ['a', '1'],
            notes: [
                {
                    url: require('./audio/c.wav'),
                    ref: cnote,
                },
            ],
            value: 0,
        },
        {
            keys: ['s', '2'],
            notes: [
                {
                    url: require('./audio/c+.wav'),
                    ref: cshnote,
                },
                {
                    url: require('./audio/d.wav'),
                    ref: dnote,
                },
            ],
            value: scale[0],
        },
        {
            keys: ['d', '3'],
            notes: [
                {
                    url: require('./audio/d+.wav'),
                    ref: dshnote,
                },
                {
                    url: require('./audio/e.wav'),
                    ref: enote,
                },
            ],
            value: scale[1],
        },
        {
            keys: ['f', '4'],
            notes: [
                {
                    url: require('./audio/f.wav'),
                    ref: fnote,
                },
                {
                    url: require('./audio/f+.wav'),
                    ref: fshnote,
                },
            ],
            value: scale[2],
        },
        {
            keys: ['g', '5'],
            notes: [
                {
                    url: require('./audio/f+.wav'),
                    ref: fshnote,
                },
                {
                    url: require('./audio/g.wav'),
                    ref: gnote,
                },
            ],
            value: scale[3],
        },
        {
            keys: ['h', '6'],
            notes: [
                {
                    url: require('./audio/g+.wav'),
                    ref: gshnote,
                },
                {
                    url: require('./audio/a.wav'),
                    ref: anote,
                },
            ],
            value: scale[4],
        },
        {
            keys: ['j', '7'],
            notes: [
                {
                    url: require('./audio/a+.wav'),
                    ref: ashnote,
                },
                {
                    url: require('./audio/b.wav'),
                    ref: bnote,
                },
            ],
            value: scale[5],
        },

        {
            keys: ['k', '8'],
            notes: [
                {
                    url: require('./audio/c2.wav'),
                    ref: c2note,
                },
            ],
            value: 0,
        },
    ];

    return (
        <div className="App">
            <header className="App-header"></header>

            <Instrument>
                <h1 className="title">Scale Explorer</h1>
                <div className="settings">
                    <div className="settings--scale">
                        <div className="flex">
                            <h4 className="title--med">Scale</h4>
                            <hr className="divider" />
                        </div>
                        <Panel scale={scale} setScale={setScale} />
                    </div>
                    <div className="settings--backing">
                        <div className="flex">
                            <h4 className="title--med">Backing</h4>
                            <hr className="divider" />
                        </div>

                        <Backing
                            tracks={[
                                {
                                    url: require('./audio/cdrone.mp3'),
                                    ref: cdrone,
                                },
                                {
                                    url: require('./audio/c_maj_chords.wav'),
                                    ref: cdrone,
                                },
                                {
                                    url: require('./audio/cdrone.mp3'),
                                    ref: cdrone,
                                },
                            ]}
                        />
                    </div>
                    <div /> <div />
                </div>
                <div className="notes">
                    {pads.map((pad, i) => {
                        return (
                            <Pad
                                key={i}
                                number={i + 1}
                                keys={pad.keys}
                                notes={pad.notes}
                                value={pad.value}
                                onChange={setScale}
                            />
                        );
                    })}
                </div>
            </Instrument>
        </div>
    );
}

export default App;
