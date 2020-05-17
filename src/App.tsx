import React from 'react';
import './App.css';
import styled from 'styled-components';
import Pad from './Pad';
import Panel from './Panel';
import Backing from './Backing';

export type Scale = {
    id: string;
    name: string;
    desc?: string;
    notes: number[];
};

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
    const scales: Scale[] = [
        { id: 'locrian', name: 'locrian', notes: [0, 0, 0, 0, 0, 0] },
        { id: 'phrygian', name: 'phrygian', notes: [0, 0, 0, 1, 0, 0] },
        {
            id: 'aeolian',
            name: 'aeolian a.k.a. natural minor',
            notes: [1, 0, 0, 1, 0, 0],
        },
        { id: 'dorian', name: 'dorian', notes: [1, 0, 0, 1, 1, 0] },
        { id: 'myxolydian', name: 'myxolydian', notes: [1, 1, 0, 1, 1, 0] },
        {
            id: 'ionian',
            name: 'ionian a.k.a. Major',
            notes: [1, 1, 0, 1, 1, 1],
        },
        { id: 'lydian', name: 'lydian', notes: [1, 1, 1, 1, 1, 1] },
    ];
    const [scale, setScale] = React.useState(scales[0]);

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
                        <div className="flex">
                            <h4 className="title--med">Scale</h4>
                            <hr className="divider" />
                        </div>
                        <Panel
                            scales={scales}
                            scale={scale}
                            setScale={setScale}
                        />
                    </div>
                    <div className="settings--backing">
                        <div className="flex">
                            <h4 className="title--med">Backing</h4>
                            <hr className="divider" />
                        </div>

                        <Backing scale={scale} />
                    </div>
                    <div /> <div />
                </div>
                <div className="notes">
                    <Pad
                        number={1}
                        keys={['a', '1']}
                        notes={[
                            {
                                url: require('./audio/c.wav'),
                                ref: cnote,
                            },
                        ]}
                        onChange={setScale}
                        value={0}
                    />

                    <Pad
                        number={2}
                        keys={['s', '2']}
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
                        onChange={setScale}
                        value={scale.notes[0]}
                    />

                    <Pad
                        number={3}
                        keys={['d', '3']}
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
                        value={scale.notes[1]}
                    />
                    <Pad
                        number={4}
                        keys={['f', '4']}
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
                        value={scale.notes[2]}
                    />
                    <Pad
                        number={5}
                        keys={['g', '5']}
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
                        value={scale.notes[3]}
                    />
                    <Pad
                        number={6}
                        keys={['h', '6']}
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
                        value={scale.notes[4]}
                    />
                    <Pad
                        number={7}
                        keys={['j', '7']}
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
                        value={scale.notes[5]}
                    />

                    <Pad
                        number={8}
                        keys={['k', '8']}
                        notes={[
                            {
                                url: require('./audio/c2.wav'),
                                ref: c2note,
                            },
                        ]}
                        onChange={setScale}
                        value={0}
                    />
                </div>
            </Instrument>
        </div>
    );
}

export default App;
