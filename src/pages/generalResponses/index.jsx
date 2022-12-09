import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import React from "react";
import Card from "./card";

const GeneralResponses = () => {

  const url = new URL(window.location.href);
  const wsurl = new WebSocket("ws://localhost:8000" + "/ws" + "/mk1");
  const room = url.pathname.replace("/", "");

  return (
    <>
      <ChatContainer>
        <h3>General Responses</h3>
      </ChatContainer>
      <ChatContainer>
        <MessagesContainer>
          <Messages id="messages">
            <Card url={wsurl}></Card>
           
          </Messages>
        </MessagesContainer>
      </ChatContainer>
    </>
  );
};

export default GeneralResponses;



const ChatContainer = styled.div`
  width: 90%;
  -webkit-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
`;

const MessagesContainer = styled.div``;

const Messages = styled.ul`
  padding: 1rem 2rem 0.5rem 2rem;
`;

const Form = styled.form`
  display: flex;
`;

const BtnContainer = styled.div`
  background: white;
  color: black;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  border: 0;
  -webkit-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 1rem;
  background: gray;
  &:focus {
    outline: none;
  }
`;

const RoomsList = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
`;

const Room = styled.div`
  margin: 1rem 0 1rem 2rem;
  width: fit-content;
  color: orange;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    background: ;
  }
`;
