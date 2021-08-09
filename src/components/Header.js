import React from 'react'
import styled from "styled-components"
import { Avatar } from "@material-ui/core"
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'

function Header() {
    return (
        <HeaderContainer>
            {/* header left */}
                <HeaderLeft>
                    <HeaderAvatar />  
                    <AccessTime />
                </HeaderLeft>
            {/* header seacrh */}
                <HeadrerSearch>
                    <Search />
                    <input placeholder='Search sans' />
                </HeadrerSearch>
            {/* header right */}
                <HeaderRight>
                    <HelpOutline />
                </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeadrerSearch = styled.div`
    display: flex;
    align-items: center;
    flex: 0.4;
    border-radius: 10px;
    background-color: #421f44;
    opacity: 1;
    padding: 0 10px;
    border: 1px solid whitesmoke;

    > input {
        background-color: transparent;
        min-width: 30vw;
        outline: none;
        border: none;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;


    :hover{
        opacity: 0.8;
    }
`;