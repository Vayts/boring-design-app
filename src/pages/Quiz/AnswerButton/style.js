import styled from 'styled-components';

export const AnswerButtonWrapper = styled.div`
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? '#0199fe' : 'transparent')};
  border: 1px solid ${({ isActive }) => (isActive ? '#0199fe' : '#9b9b9b')};
	color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  text-align: center;
  margin-bottom: 25px;
  padding: 5px 0;
  user-select: none;
  cursor: pointer;
`;
