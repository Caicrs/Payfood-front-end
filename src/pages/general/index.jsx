import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const General = () => {
  const data = useRef(new Array());
  const form = document.querySelector("form");
  const url = new URL(window.location.href);
  const wsurl = new WebSocket("ws://localhost:8000" + "/ws" + url.pathname);
  const room = url.pathname.replace("/", "");
  const input = useRef(null);

  wsurl.onopen = () => {
    const m = {
      type: "join",
      payload: {
        by: "new user",
        room: "general",
      },
    };
    wsurl.send(JSON.stringify(m));
  };

  wsurl.addEventListener("message", function (message) {
    const data = JSON.parse(message.data);
    switch (data.type) {
      case "left":
        left(data.payload);
        break;
      case "message":
        add(data.payload);
        break;
      default:
        break;
    }
  });

  function add(message) {
    console.log("add : " + message.body);
    /*
  data.current.push = message.body;
  console.log(data);
  const messages = document.querySelector("#messages");
  const ele = document.createElement("div");
  ele.className = "message";
  ele.textContent = message.by + ": " + message.body;
  "" || messages.appendChild(ele);
  */
  }

  function left(message) {
    console.log("left : " + message.body);
    /*
  const messages = document.querySelector("#messages");
  const ele = document.createElement("div");
  ele.classList.add("message", "add-message");
  ele.textContent = "🤖: " + message.by + " has left the room";
  messages.appendChild(ele);
  online.textContent = parseInt(message.body, 10);
  */
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const m = {
      type: "message",
      payload: {
        body: input.current,
        by: "new user",
        room: room,
      },
    };
    // retornar isso pro usuario guardando nos cookies/cache/localStorage
    data.current.push(input.current);
    console.log(data);
    wsurl.send(JSON.stringify(m));
    input.current = "";
    document.getElementById("input").value = "";
  };

  return (
    <>
      <ChatContainer>
        <MessagesContainer>
          <Messages></Messages>
        </MessagesContainer>
        <Form id="form" onSubmit={handleSubmit}>
          <Input
            id="input"
            onChange={(e) => (input.current = e.target.value)}
            ref={input}
            type="text"
            placeholder="Insira sua mensagem"
          />

          <BtnContainer id="submit">
            <Btn type="submit">Enviar</Btn>
          </BtnContainer>
        </Form>
      </ChatContainer>
    </>
  );
};

export default General;

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
