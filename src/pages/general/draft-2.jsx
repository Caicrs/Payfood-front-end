import { useEffect, useMemo, useRef,useState } from "react";
import styled from "styled-components";

const General = () => {
  const data = useRef(new Array());
  const form = document.querySelector("form");
  const url = new URL(window.location.href);
  const wsurl = new WebSocket("ws://localhost:8000" + "/ws" + url.pathname);
  const room = url.pathname.replace("/", "");
  const input = useRef(null);
 

  // console.log(wsurl)

  let username = localStorage.getItem("chatty-username");
  while (!username || !username.trim()) {
    username = prompt("Enter a username");
    if (username.trim()) {
      localStorage.setItem("chatty-username", username.trim());
    }
  }

  useEffect(() => {
    
    wsurl.addEventListener("message", function (message) {
      const data = JSON.parse(message.data);
      switch (data.type) {
        case "message":
          add(data.payload);
          break;
        default:
          break;
      }
    });

  }, []);


  function add(message) {
    console.log("add : " + message.body);
    data.current.push = message.body;
    console.log(data);
   /* const messages = document.querySelector("#messages");
    const ele = document.createElement("div");
    ele.className = "message";
    ele.textContent = message.by + ": " + message.body;
    "" || messages.appendChild(ele);
    */
  }

  wsurl.addEventListener("open", function () {
    const m = {
      type: "join",
      payload: {
        by: username,
        room: "general",
      },
    };
    wsurl.send(JSON.stringify(m));
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    const m = {
      type: "message",
      payload: {
        body: input.current,
        by: username,
        room: room,
      },
    };
    // retornar isso pro usuario guardando nos cookies ou localStorage
    data.current.push(input.current);
    console.log(data)
    // wsurl.send(JSON.stringify(m));
    input.current = "";
    document.getElementById("input").value = "";
  };

  return (
    <>
      <h1 id="statusServer"></h1>
      <ChatContainer>
        <MessagesContainer>
          <Messages>

          </Messages>
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
