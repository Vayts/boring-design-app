import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 100%;
  font-size: 22px;
  position: relative;

  img {
    width: 16px;
    margin-right: 5px;
  }
`;

export const DropdownButton = styled.div`
  user-select: none;
	cursor: pointer;
  background-color: transparent;
	border: 1px solid #dcdcdc;
  text-overflow: ellipsis;
  display: flex;
	align-items: center;
  padding-left: 10px;
	overflow: hidden;
  white-space: nowrap;
	height: 40px;
  position: relative;
	
	i {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
	}
`;

export const DropdownTitle = styled.p`
  font-size: 18px;
  color: #7c7b7b;
  margin-bottom: 10px;
`;

export const DropdownContent = styled.div`
  position: absolute;
	top: 105%;
	width: 100%;
	z-index: 100;
  box-shadow: 0 0 10px rgba(132, 132, 132, 0.35);
`;

export const DropdownItem = styled.div`
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 22px;
  padding: 5px 5px;
  white-space: nowrap;
  user-select: none;
  background-color: #fff;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.1s;
    cursor: pointer;
    background-color: #e3e3e3;
  }
`;
