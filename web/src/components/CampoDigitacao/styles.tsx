import styled from "styled-components";

export const Campo = styled.input`
background: #f0f0f0;
margin: 1em 0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0, 0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 16px;
font-size: 16px;
`

export const CampoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start; 
`;

export const Rotulo = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #0B3B60;
`


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center
`
export {}