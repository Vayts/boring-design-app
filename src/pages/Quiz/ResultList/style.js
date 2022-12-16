import styled from 'styled-components';

export const ResultListWrapper = styled.ul`
	list-style: none;
  display: flex;
	margin: 0 0 20px;
	padding: 0;
`;

export const ResultItem = styled.li`
	height: 30px;
	width: 30px;

	background-color: ${({ correct }) => (correct ? '#0199fe' : '#606060')};
  display: flex;
	align-items: center;
  justify-content: center;
	color: #fff;
	margin: 0 5px;
`;
