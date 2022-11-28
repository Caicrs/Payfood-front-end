import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const url = new URL(window.location.href); // For get the entire url
const thisChannel = "ws://localhost:8000/ws" + url.pathname; // For get only the "/:id" value
const room = url.pathname.replace("/", "");
const ws = new WebSocket(thisChannel);

const Channel = () => {
  const username = localStorage.getItem("chatty-username");

  useEffect(() => {

    console.log(thisChannel);
     const m = {
        type: "join",
        payload: {
          by: username,
          room: url.pathname,
        }}

        
    ws.addEventListener("open", function () {
      const m = {
        type: "join",
        payload: {
          by: username,
          room: room,
        },
      };
      console.log(m);
      ws.send(JSON.stringify(m));
    });
  }, []);

  return (
    <>
      <h1 id="statusServer">Channel: {thisChannel}</h1>
      <ChatContainer>
        <MessagesContainer>
          <Messages>
            {" "}
            <pre id="output"></pre>
          </Messages>
        </MessagesContainer>
        <Form id="form">
          <Input id="input" type="text" placeholder="Insira sua mensagem" />

          <BtnContainer id="submit">
            <Btn>Enviar</Btn>
          </BtnContainer>
        </Form>
      </ChatContainer>
    </>
  );
};

export default Channel;

const ChatContainer = styled.div`
  width: 90%;
  -webkit-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 61px -15px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
`;

const MessagesContainer = styled.div`
  height: 500px;
`;

const Messages = styled.div`
  padding: 1rem 0 0.5rem 2rem;
  font-size: 0.75rem;
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

const Btn = styled.div`
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
