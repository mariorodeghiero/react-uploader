import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  min-height: 150px;
  padding: 20px;
  border: 1px dashed #3F4C6B;
  margin: 0;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;

  ::-webkit-file-upload-button {
    flex-shrink: 0;
    font-size: 0.65rem;
    background-color: #3F4C6B;
    color: #ffffff;
    border-radius: 3px;
    padding: 8px 15px;
    margin-right: 10px;
    text-transform: uppercase;
    text-align: center;
    border: none;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;


export const Button = styled.button`
  font-size: 0.65rem;
  background-color: #3F4C6B;
  color: #ffffff;
  border-radius: 3px;
  padding: 8px 25px;
  margin: 0 auto;
  text-transform: uppercase;
  border: none;
  outline: 0;

  :disabled {
    color: #222;
    background-color: #EEEEEE;
  }
`;