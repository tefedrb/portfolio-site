import React, { useState, useEffect, useContext } from 'react';
import Folder from './Folder';
import styled from 'styled-components';
import { Context } from '../context';

const NavWrapper = styled.nav`
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
    width: 100%;

    @media (max-height: 400px) and (max-width: 700px){
        width: 100%;
    }

    @media (max-width: 948px){
        padding: 1%;
    }
    @media (max-width: 948px) and (min-height: 500px){
        flex-direction: row;
        margin-top: 0px;
        background-color: rgba(79, 79, 79, 0.73);
        box-shadow: 1px -5px 27px -7px rgba(79,79,79,0.73);
    }
`

const NavigationPanel = (props) => {
    const [ openFolder, changeOpenFolder ] = useState("About");
    const { folder, filesFromFolder, saveStateForMobileHack, 
        rehydrateStateFromStorage, checkStorageForMobileHack, globalState, updateRenderedFile  } = useContext(Context);
    const { fileLoaded } = globalState;

    useEffect(() => {

        /* TODO: Create a centralized function in context that has all the switches
            and updates in it's own state - this function will rehydrate all the 
            components when hack is initiated and window gets reloaded */

        if(checkStorageForMobileHack()){
            updateRenderedFile(rehydrateStateFromStorage('fileOpen'))
            changeOpenFolder(rehydrateStateFromStorage('folderOpen'));

            saveStateForMobileHack('isMobileHack', 'false');
        } else {
            saveStateForMobileHack('fileOpen', fileLoaded);
            saveStateForMobileHack('folderOpen', openFolder);
        }

        props.changeFolder(openFolder);
        filesFromFolder(folder[openFolder]);
        
    }, [openFolder, fileLoaded]);

    return (
        <NavWrapper name={"navWrapper"}> 
            <Folder
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"Projects"}
                files={folder["Projects"]}
            />
            <Folder      
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder} 
                title={"About"}
                files={folder["About"]}
            />
            <Folder 
                changeOpenFolder={changeOpenFolder} 
                openFolder={openFolder}
                title={"Contact"}
                files={folder["Contact"]}
            />
        </NavWrapper>
    )
}

export default NavigationPanel;