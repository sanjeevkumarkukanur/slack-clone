import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase'


function ChatInput({ channelName, channelId }) {

    const inputRef = useRef(null)

    const sendMessage = (e) => {
        e.preventDefault()

        if(channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("message").add({
            message: inputRef.current.value,
        })
    }
    return (
        <ChatInputContainer>
            <form>
                <input Ref={inputRef} placeholder={`Message #Room`} />
                <Button hidden type='submit' onClick={sendMessage} > Send </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border:1px solid lightgray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > Button {
        display: none !important;
    }
`;