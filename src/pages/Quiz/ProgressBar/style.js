import styled from 'styled-components';

export const ProgressBarItem = styled.div`
	align-self: flex-start;
	background-color: #0199fe;
	height: 5px;
	width: ${({ percent }) => `${percent}%`};
	position: absolute;
	top: 0;
`;
