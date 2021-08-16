
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Message from './Message';

    
    function Chat() {

        const chatRef = useRef(null)
        const roomId = useSelector(selectRoomId)
        const [roomDetails] = useDocument(
            roomId && db.collection('rooms').doc(roomId)
        )
        const [roomMessages, loading] = useCollection(
            roomId && 
            db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
        );
        useEffect(() => {
            chatRef?.current?.scrollIntoView()
        }, [roomId, loading])
        

        return (
            <ChatContainer>
                {roomMessages && roomDetails && (
                    <>
                    <Header >
                        <HeaderLift>
                            <h4><strong>{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlined />
                        </HeaderLift>
    
                        <HeaderRight>
                            <p>
                                <InfoOutlined /> Details
    
                            </p>
                        </HeaderRight>
                    </Header>
    
                    <ChatMessages>
                        {roomMessages?.docs.map((doc) =>{
                            const { message, timestamp, user, userImage } = doc.data()
    
                            return(
                                <Message 
                                key = {doc.key}
                                message = {message}
                                timestamp= {timestamp}
                                user= {user}
                                userImage= {userImage}
                                />
                            )
                        })};
                         <ChatBattom ref={chatRef} />
                    </ChatMessages>
                    <ChatInput 
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name}
                    channelId = {roomId}
                    />
                    </>
                )}
                
                
            </ChatContainer>
        )
    }
    
    export default Chat

    const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    `;

    const HeaderLift = styled.div`
        display: flex;
        align-items: center;
    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 14px;
    }
    `;

    const HeaderRight = styled.div`
    >p {
        display: flex;
        align-items: center;
        font-size: 18px;
    }
    > p > .MuiSvgIcon-root{
        margin-right: 10px !important;
        font-size: 18px;
    }
    `;

    const ChatBattom =styled.div`
    border-bottom: 20px;
    `;
    const ChatMessages = styled.div` 
    `;

    const ChatContainer = styled.div`
        flex: 0.7;
        flex-grow: 1;
        overflow-y: scroll;
        margin-top: 120px;
    `;