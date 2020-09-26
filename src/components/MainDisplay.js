import React, { useContext } from 'react';
import styled from 'styled-components';
import File from './File';
import { Context } from '../context';
import Project from './Projects/Project';

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow: auto;
`

const MainDisplay = () => {
    const context = useContext(Context);
    const { fileOpen } = context;

    console.log(fileOpen, "OPEN FILE")
    const displayProject = () => {
        return <Project file={fileOpen}></Project>
    }

    return (
        <Screen name={"screen"}>
            <File 
                color={"green"} 
                name={"file"}
                size={{width: "63%", height: "100%"}}
                content={displayProject()}
            />
        </Screen>
    )
}

export default MainDisplay;