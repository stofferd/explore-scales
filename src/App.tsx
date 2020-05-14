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
                        <Pad notes={[]} />1
                    </div>
                    <div className="note--2">2</div>
                    <div className="note--3">3</div>
                    <div className="note--4">4</div>
                    <div className="note--5">5</div>
                    <div className="note--6">6</div>
                    <div className="note--7">7</div>
                    <div className="note--8">8</div>
                </div>
            </Instrument>
        </div>
    );
}

export default App;
