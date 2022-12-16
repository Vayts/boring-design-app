import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AnswerButton } from '@src/pages/Quiz/AnswerButton/AnswerButton';
import { QuizAnswerButtons } from '@src/pages/Quiz/style';

export const AnswerList = ({ answers, setActive, active }) => {
	
	const chooseAnswer = (item) => {
		setActive(item);
	};
	
	return (
		<QuizAnswerButtons>
			{answers.map((item) => {
				return (
					<AnswerButton
						key={item.id}
						clickHandler={() => chooseAnswer(item)}
						isActive={active ? item.id === active.id : false}
						title={item.text}
					/>
				);
			})}
		</QuizAnswerButtons>
	);
};

AnswerList.propTypes = {
	answers: PropTypes.array.isRequired,
	active: PropTypes.shape({
		id: PropTypes.number,
	}),
};
