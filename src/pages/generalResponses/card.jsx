import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";

const Card = ({ url }) => {
    console.log(url)
    const [dataMess, setDataMess] = useState([]);
    const count = useRef(0);
  useEffect(() => {


    url.addEventListener("message", function (message) {
      const data = JSON.parse(message.data);
      switch (data.type) {
        case "message":
          // console.log(data.payload)
          count.current = count.current + 1;
          console.log(count.current);
          setDataMess((dataMess) => [...dataMess, data.payload.body]);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <>
      {dataMess.map((item, i) => (
        <CardD key={i}>
          <Item>{item.client}</Item>
          <Item>{item.table}</Item>
          <Item>{item.marketplace}</Item>
        </CardD>
      ))}
    </>
  );
};

export default Card;

const CardD = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 0.5rem 0;
  margin: 1rem 0;
  color: black;
`;

const Item = styled.div`
  width: fit-content;
  color: black;
  padding: 0 1rem 0 1rem;
  font-size: 0.75rem;
  font-weight: 400;
`;
