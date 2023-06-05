import React from "react";
import { ChatEngine } from 'react-chat-engine';


import LoginForm from "./LoginForm"
import ChatFeed  from "./ChatFeed";

export default function Chat(props) {
  
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
    <>
     <ChatEngine 
        height="100vh"
        projectID="6587b638-e460-452d-bbc5-0deafcf458a6"
        userName={localStorage.getItem('username')} 
        userSecret={localStorage.getItem('password')} 
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
      />
    </>
  );
}
