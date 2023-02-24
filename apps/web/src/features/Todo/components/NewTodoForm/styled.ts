import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;
  height: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  outline: none;
`;

export const Button = styled.button`
  width: 120px;
  height: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
