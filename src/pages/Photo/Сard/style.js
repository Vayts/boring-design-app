import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	margin-bottom: 30px;
  border-top: 5px solid #0199fe;
  animation: ${appear} ${({ order }) => `0.${order * 3 + 2}s`} linear;
`;

export const CardTitleWrapper = styled.div`
	padding: 2px 10px;
  display: flex;
	align-items: center;
	position: relative;
`;

export const CardAuthorPhoto = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #0199fe;
	margin-right: 10px;
  display: flex;
	align-items: center;
  justify-content: center;
	color: #fff;
`;

export const CardAuthorName = styled.p``;

export const CardImage = styled.img`
	width: 100%;
	vertical-align: top;
`;

export const CardBottomContent = styled.div`
	padding: 10px;
`;

export const CardCategories = styled.p`
  margin: 5px 0;
  color: #4b4b4b;
`;

export const CardTitle = styled.h4`
	margin: 5px 0;
	font-size: 25px;
`;

export const CardDescription = styled.p`
	margin: 5px 0;
	color: #7c7b7b;
`;
