import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase'


function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault(); 

        if(!channelId){
            return false;
        }
        console.log(channelId);
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Sanjeev",
            userImage : "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        });
        setInput('');
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={ (e) => setInput(e.target.value)}
                 placeholder={`Message #${channelName}`} />
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