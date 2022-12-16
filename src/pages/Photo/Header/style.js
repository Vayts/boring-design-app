import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 10px;
  background-color: #0199fe;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
	top: 0;
	z-index: 100;
	width: 100vw;
`;

export const HeaderContent = styled.div`
	max-width: 1020px;
	margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogoWrapper = styled.div`
	display: flex;
	align-items: center;
	
	p {
		font-size: 25px;
		margin: 0;
		color: #fff;
	}
`;

export const HeaderLogo = styled.div`
	background-color: #fff;
	width: 35px;
	height: 35px;
	border-radius: 50%;
  display: flex;
	align-items: center;
  justify-content: center;
	margin-right: 10px;
	
	img {
		width: 45px;
		height: 45px;
	}
`;
