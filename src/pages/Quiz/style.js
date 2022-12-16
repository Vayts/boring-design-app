import styled from 'styled-components';

export const QuizWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
  justify-content: center;
`;

export const QuizContent = styled.div`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
	width: 700px;
	height: 450px;
  position: relative;
  display: flex;
	align-items: center;
  justify-content: center;
	flex-direction: column;
`;

export const QuizTitle = styled.h4`
	margin: 0;
`;

export const QuizDisplay = styled.div`
	padding: 20px;
	width: 100%;
	min-height: 200px;
  display: flex;
	align-items: center;
  justify-content: center;
	flex-direction: column;
`;

export const QuizTimer = styled.div`
  position: absolute;
	top: 10px;
	right: 15px;
	font-size: 20px;
`;

export const QuizCounter = styled.p`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 20px;
`;

export const QuizDisplayText = styled.p`
	font-size: 18px;
`;

export const QuizAnswerButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
  margin: 30px 20px 20px;
	padding: 0 25px;
	div {
		flex-basis: calc(50% - 20px);
	}
`;

export const QuizBottomContent = styled.div`
	width: 100%;
  border-top: 1px solid rgba(124, 123, 123, 0.25);
	padding: 10px 30px;
	display: flex;
	justify-content: flex-end;
`;

export const QuizResultWrapper = styled.div`
  height: 450px;
	flex-grow: 1;
  display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	
	p {
		font-size: 20px;
	}
`;
