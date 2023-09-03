import React, { useState } from "react";
import { styled } from "styled-components";
import Diseño from "./Diseño/Diseño";

const Servicios = () => {
  const [activeItem, setActiveItem] = useState("Diseño");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <Div className=" max-w-screen-xl mx-auto bg-white rounded-2xl">
      <div className="cards mx-auto max-w-screen-xl mt-4">
        <Ul className="list-cards">
          <li className="">
            <a className={activeItem === 'Diseño' ? "active" : ""} onClick={() => handleItemClick('Diseño')} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
              DISEÑO </a>
          </li>
          <li>
            <a className={activeItem === 'Supervición' ? "active" : ""} onClick={() => handleItemClick('Supervición')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
              SUPERVICION </a>
          </li>
          <li>
            <a className={activeItem === 'Gestión' ? "active" : ""} onClick={() => handleItemClick('Gestión')}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
              GESTIÓN </a>
          </li>
          <li >
            <a className={activeItem === 'Construcción' ? "active" : ""} onClick={() => handleItemClick('Construcción')}> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>CONSTRUCCIÓN </a>
          </li>
        </Ul>
      </div>
      <div className="cards-detail">
        <Diseño itemName={activeItem} />
      </div>
    </Div>
  );
};

export default Servicios;

const Div = styled.div`
  margin-top: -96px;
  @media screen and (max-width: 540px){
    margin-top: -50px;
  }
`
const Ul = styled.ul`
  display: flex;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow:hidden;
  @media screen and (max-width: 540px){
      flex-direction: column;
      width: 100%;
      border-radius: 0;
    }
  li {
    width: 350px;
    @media screen and (max-width: 540px){
      width: 100%;
    }
    a {
      color: white;
      width: 100%;
      background-color: black;
      height: 80px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media screen and (max-width: 540px){
        height: 60px;
        font-size: 18px;
;
    }
      &:hover{
        color: #f18282;
        background: #161616;
      }
    }
    .active{
        color: red;
        background: white;
    }
  }
`;
