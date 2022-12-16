import React from 'react';
import PropTypes from 'prop-types';
import { MenuButtonIcon, MenuButtonItem, MenuButtonWrapper } from '@src/pages/MainPage/MenuButton/style';

export const MenuButton = ({ onMouseOver, onMouseLeave, item }) => {
	return (
		<MenuButtonWrapper>
			<MenuButtonItem
				onMouseOver={(e) => onMouseOver(e, item)}
				onMouseLeave={() => onMouseLeave()}
				to={item.link}
			>
				<MenuButtonIcon src={`assets/img/${item.img}`}/>
			</MenuButtonItem>
		</MenuButtonWrapper>
	);
};

MenuButton.propTypes = {
	onMouseOver: PropTypes.func,
	onMouseLeave: PropTypes.func,
	item: PropTypes.object,
};
