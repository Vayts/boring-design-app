import styled from 'styled-components';

export const InputLabel = styled.label`
  position: relative;
	display: block;
	margin-bottom: 30px;
`;

export const InputIcon = styled.span`
  position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
	
	&:before {
		font-size: 25px;
	}
`;

export const InputElem = styled.input`
  height: ${({ height }) => (height || '40px')};
  font-size: ${({ fontSize }) => (fontSize || '14px')};
  width: ${({ width }) => (width || 'auto')};
  outline: none;
  border-radius: 0;
  border: 1px solid #dcdcdc;
  padding: 0 10px;
  font-family: 'Source Sans Pro', sans-serif;
  -moz-appearance: textfield;

  &::placeholder {
    color: #3b3b3b;
    font-size: 14px;
    line-height: 18px;
  }

  &:hover {
    transition: all 0.1s;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export const InputTitle = styled.p`
	font-size: 18px;
	color: #7c7b7b;
	margin-bottom: 10px;
`;
