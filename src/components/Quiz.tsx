import React, { useState } from 'react';
import { questions } from '../questions';
import { QuestionCard } from './QuestionCard';
import { Results } from './Results';

export const Quiz: React.FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [wrongIndices, setWrongIndices] = useState<number[]>([]);
	const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);
	const [isQuizFinished, setIsQuizFinished] = useState(false);

	const currentQuestion = questions[currentQuestionIndex];

	const handleChoiceClick = (index: number) => {
		// Prevent interaction if already correct or already marked wrong
		if (correctAnswerClicked || wrongIndices.includes(index)) {
			return;
		}

		if (index === currentQuestion.correctIndex) {
			// Correct!
			setCorrectAnswerClicked(true);

			// If no wrong answers were clicked yet, increment score
			if (wrongIndices.length === 0) {
				setScore((prev) => prev + 1);
			}

			// Delay before moving to next question
			setTimeout(() => {
				if (currentQuestionIndex < questions.length - 1) {
					setCurrentQuestionIndex((prev) => prev + 1);
					setWrongIndices([]);
					setCorrectAnswerClicked(false);
				} else {
					setIsQuizFinished(true);
				}
			}, 800);
		} else {
			// Wrong!
			setWrongIndices((prev) => [...prev, index]);
		}
	};

	const handleRestart = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setWrongIndices([]);
		setCorrectAnswerClicked(false);
		setIsQuizFinished(false);
	};

	if (isQuizFinished) {
		return (
			<Results
				score={score}
				totalQuestions={questions.length}
				onRestart={handleRestart}
			/>
		);
	}

	return (
		<QuestionCard
			question={currentQuestion}
			questionIndex={currentQuestionIndex}
			totalQuestions={questions.length}
			wrongIndices={wrongIndices}
			correctAnswerClicked={correctAnswerClicked}
			onChoiceClick={handleChoiceClick}
		/>
	);
};
