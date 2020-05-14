import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import cnote from './audio/c.mp3';

type Props = {
    notes: any;
};

const MusicPad = styled.div`
    background-color: red;
`;

const Pad = ({ notes }: Props) => {
    const [cn] = useSound(cnote);

    return (
        <>
            <MusicPad>
                <div onClick={() => { console.log({ cn }) }}>Pad</div>
            </MusicPad>
        </>
    );
};

export default Pad;
