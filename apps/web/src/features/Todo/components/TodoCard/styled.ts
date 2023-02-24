import styled, { css } from 'styled-components';

export const DeleteButton = styled.img.attrs(() => ({
  src: './DeleteIcon.png',
}))`
  cursor: pointer;
  display: none;
  height: 12px;
  width: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 20px;

  &:hover {
    ${DeleteButton} {
      display: block;
    }
  }
`;

export const TitleInput = styled.input.attrs(() => ({
  type: 'text',
}))<{ $isCompleted: boolean }>`
  border: none;
  outline: none;
  width: 636px;

  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      background-color: white;
      color: black;
      text-decoration: line-through;
    `}
`;

export const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  width: 20px;
  height: 20px;
  margin: 0;
  outline: none;
  accent-color: black;
  border-color: black;
  cursor: pointer;
`;
