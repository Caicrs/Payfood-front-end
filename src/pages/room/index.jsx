import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const url = new URL(window.location.href); // For get the entire url
const thisChannel = "ws://localhost:8000/ws" + url.pathname; // For get only the "/:id" value
const room = url.pathname.replace("/", "");
const ws = new WebSocket(thisChannel);

const Channel = () => {
  const username = localStorage.getItem("chatty-username");
  const data = useRef(new Array());
  const [messages, setMessages] = useState([]);
  const form = document.querySelector("form");
  const url = new URL(window.location.href);
  const wsurl = new WebSocket("ws://localhost:8000" + "/ws" + url.pathname);
  const room = url.pathname.replace("/", "");
  const input = useRef(null);

  wsurl.onopen = () => {
    const m = {
      type: "join",
      payload: {
        by: username,
        room: url.pathname,
      },
    };
    //   wsurl.send(JSON.stringify(m));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
 
    const m = {
      type: "message",
      payload: {
        body: {
          client: "client-name",
          marketplace: "general-marketplace",
          table: 1,
          products: [
            {
              id: "product-id-1",
              name: "product-name-1",
              price: 12.99,
            },
            {
              id: "product-id-2",
              name: "product-name-2",
              price: 22.99,
            },
          ],
          totalPrice: 12.99,
          date: "20/20/2022",
          hour: "9:10",
        },
        by: "new user",
        room: room,
      },
    };
    // retornar isso pro usuario guardando nos cookies/cache/localStorage

    wsurl.send(JSON.stringify(m));
    console.log("enviado");
    input.current = "";
  };

  return (
    <>
      <ChatContainer>
        <MessagesContainer>
          <Messages>
          
          </Messages>
        </MessagesContainer>
     
          <BtnContainer id="submit">
            <Btn onClick={handleSubmit}>Enviar</Btn>
          </BtnContainer> 
    
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
