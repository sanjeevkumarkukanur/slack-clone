import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } 
from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import SidebarOpt from './SidebarOption';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Sanjeev Fam</h2>
                    <h3>
                        <FiberManualRecord />
                        Sanjeev Kukanur
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOpt Icon={InsertComment} title="Threads" />
            <SidebarOpt Icon={Inbox} title="Mentions & Reactions" />
            <SidebarOpt Icon={Drafts} title="Saved items" />
            <SidebarOpt Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOpt Icon={PeopleAlt} title="People & user groups" />
            <SidebarOpt Icon={Apps} title="Apps" />
            <SidebarOpt Icon={FileCopy} title="File browser" />
            <SidebarOpt Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOpt Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOpt Icon={Add} addChannelOption title="Add Channel" />
            {channels?.docs.map(doc =>{
                <SidebarOpt addChannelOption title={doc.data().name} />

            })}

        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color:  var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
    `;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;
    
    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        color: green;
        font-size: 14px;
        margin-top: 1px;
        margin-left: 2px;
    }
`;
