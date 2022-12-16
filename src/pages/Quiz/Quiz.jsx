import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	QuizAnswerButtons,
	QuizBottomContent,
	QuizContent, QuizCounter,
	QuizDisplay,
	QuizDisplayText, QuizResultWrapper, QuizTimer, QuizTitle,
	QuizWrapper,
} from '@src/pages/Quiz/style';
import { Button } from '@src/components/Button/Button';
import { Timer } from '@src/pages/Quiz/Timer/Timer';
import { ProgressBar } from '@src/pages/Quiz/ProgressBar/ProgressBar';
import { AnswerList } from '@src/pages/Quiz/AnswerList/AnswerList';
import { ResultList } from '@src/pages/Quiz/ResultList/ResultList';

export const Quiz = ({ quizItem }) => {
	const [game, setGame] = useState(false);
	const [questions, setQuestions] = useState(quizItem);
	const [stage, setStage] = useState(1);
	const [time, setTime] = useState(quizItem.timeToAnswer);
	const [active, setActive] = useState(null);
	const [timeoutId, setTimeoutId] = useState(0);
	
	useEffect(() => {
		if (game) {
			if (stage <= quizItem.questions.length && time === 0) {
				nextState();
				setTime(quizItem.timeToAnswer);
			}
			
			if (time < 0) {
				setTime(quizItem.timeToAnswer);
			}
		}
	}, [time, game]);
	
	const nextState = () => {
		setQuestions({ ...questions, userAnswers: [...questions.userAnswers, active] });
		setActive(null);
		setStage(stage + 1);
		setTime(questions.timeToAnswer);
		clearTimeout(timeoutId);
	};
	
	const getResult = () => {
		let correctAnswerCounter = 0;
		
		questions.userAnswers.forEach((item) => {
			if (item && item.correct) {
				correctAnswerCounter += 1;
			}
		});
		
		return correctAnswerCounter;
	};
	
	const reset = () => {
		setQuestions(quizItem);
		setActive(null);
		setStage(1);
		clearTimeout(timeoutId);
		setTime(questions.timeToAnswer);
	};
	
	return (
		<QuizWrapper>
			<QuizContent>
				{!game ? <Button clickHandler={() => (setGame(true))} text='Start' width='150px' height='40px'/>
					: (
						<>
							<ProgressBar current={stage} max={questions.questions.length}/>
							{stage <= questions.questions.length
								? (
									<>
										<QuizTimer>
											<Timer
												time={time}
												setTime={setTime}
												initial={quizItem.timeToAnswer}
												setTimeoutId={setTimeoutId}
												stage={stage}
											/>
										</QuizTimer>
										<QuizCounter>{`${stage} of ${quizItem.questions.length}`}</QuizCounter>
										<QuizDisplay>
											<QuizTitle>Question:</QuizTitle>
											<QuizDisplayText>{questions.questions[stage - 1].question}</QuizDisplayText>
										</QuizDisplay>
										<AnswerList answers={questions.questions[stage - 1].answers} active={active} setActive={setActive}/>
										<QuizBottomContent>
											<Button clickHandler={() => nextState()} text='Next' disabled={active === null} width='100px' height='40px' fz='18px'/>
										</QuizBottomContent>
									</>
								) : (
									<QuizResultWrapper>
										<p>{`Your result is ${getResult()} of ${questions.questions.length}`}</p>
										<ResultList userAnswers={questions.userAnswers}/>
										<Button text='Reset' clickHandler={() => reset()} width='150px' height='40px'/>
									</QuizResultWrapper>
								)}
						</>
					)}
			</QuizContent>
		</QuizWrapper>
	);
};

Quiz.propTypes = {
	quizItem: PropTypes.shape({
		questions: PropTypes.array,
		userAnswers: PropTypes.array,
		timeToAnswer: PropTypes.number,
	}),
};
