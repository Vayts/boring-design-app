import React, { useState } from 'react';
import { MainContent, MainDescription, MainList, MainTitle, MainWrapper } from '@src/pages/MainPage/style';
import { MenuButton } from '@src/pages/MainPage/MenuButton/MenuButton';
import { MENU } from '@constants/menuItem';

export const MainPage = () => {
	const [active, setActive] = useState(null);
	
	const onHover = (e, item) => {
		e.stopPropagation();
		setActive(item);
	};
	
	const onHoverEnd = () => {
		setActive(null);
	};
	
	return (
		<MainWrapper>
			<MainContent>
				<MainTitle>Boring Design App</MainTitle>
				<MainList>
					{MENU.map((item) => {
						return (
							<MenuButton
								key={item.id}
								onMouseOver={onHover}
								item={item}
								onMouseLeave={onHoverEnd}
							/>
						);
					})}
				</MainList>
				<MainDescription>
					{active ? active.description : null}
				</MainDescription>
			</MainContent>
		</MainWrapper>
	);
};

MainPage.propTypes = {};
