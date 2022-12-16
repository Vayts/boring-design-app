import styled from 'styled-components';

export const CategoriesWrapper = styled.aside`
  padding: 20px 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	flex-basis: 30%;
	border-top: 5px solid #0199fe;
	align-self: flex-start;
`;

export const CategoriesTitle = styled.h3`
	text-align: center;
	margin: 5px 0;
`;

export const CategoriesList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	width: 100%;
`;

export const CategoriesItem = styled.li`
	padding: 3px 5px;
	font-size: 16px;
	margin: 10px;
	transition: background-color 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
	background-color: ${({ isActive }) => (isActive ? '#0199fe' : 'aliceblue')};
	user-select: none;
	cursor: pointer;
	color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
`;

export const CategoriesResult = styled.p`
	margin: 5px 0;
	color: #7c7b7b;
	text-align: center;
`;
