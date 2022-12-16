import styled from 'styled-components';

export const SearchWrapper = styled.label`
  position: relative;
  height: 35px;
  box-sizing: border-box;
	width: 300px;
	display: inline-block;
	margin-right: 20px;
	border-radius: 4px;
`;

export const SearchInput = styled.input`
	height: 35px;
	width: 100%;
  box-sizing: border-box;
	border: none;
	padding: 0 40px 0 10px;
	
	&:focus {
		outline: none;
	}
`;

export const SearchIcon = styled.span`
  position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	
	&:before {
		font-size: 25px;
	}
`;
