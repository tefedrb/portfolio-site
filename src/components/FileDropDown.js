import React from 'react';
import File from './File';
import styled from 'styled-components';
import PathToFile from './svgs/PathToFile';

const FileDropDownWrap = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

const AllFilesWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const FileWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    color: green;
    font-size: 12px;
`
const FileDropDown = (props) => {
    const files = props?.files.map((fileData, key) => (
        <FileWrapper key={key}>
            <File 
                data={fileData}
                mini={true} 
            />
            {fileData}
        </FileWrapper>
    )
);

    // I can use the length of the files array and the height to determine
    // our file path svg.
    const path = <PathToFile numOfFiles={props?.files.length} />;

    return (
        <FileDropDownWrap name={"fileDropDown"}>
            {props.display ? <PathToFile numOfFiles={props?.files.length}/> : ""}
            <AllFilesWrap>
                {props.display ? files : ""}
            </AllFilesWrap>
        </FileDropDownWrap>
    )
}

export default FileDropDown;