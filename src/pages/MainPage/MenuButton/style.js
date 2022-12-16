import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuButtonWrapper = styled.li`
	flex-basis: 33%;
	display: flex;
  justify-content: center;
	align-items: center;
`;

export const MenuButtonItem = styled(NavLink)`
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  padding: 20px 50px;
  border-radius: 10px;
  display: inline-block;

  &:hover {
    transition: all 0.2s;
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

    img {
      opacity: 1;
      transition: all 0.2s;
    }
  }

  &:active {
    background-color: #eeeeee;
  }
`;

export const MenuButtonIcon = styled.img`
	width: 60px;
	height: 60px;
	opacity: 0.6;
`;
