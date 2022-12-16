import styled from 'styled-components';

export const ButtonItem = styled.button`
  background-color: #0199fe;
  outline: none;
  color: #fff;
  margin-top: 10px;
  padding: 10px 0;
  width: ${({ width }) => (width || 'auto')};
  border: 1px solid transparent;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${({ fz }) => (fz || '20px')};
  min-height: ${({ height }) => (height || '57px')};
  position: relative;
  box-shadow: 17px 26px 25px rgba(226, 226, 226, 0.25);
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #2775a8;
    transition: all 0.2s;
  }

  &[disabled] {
    background: #7c7b7b;
		cursor: default;
  }
`;
