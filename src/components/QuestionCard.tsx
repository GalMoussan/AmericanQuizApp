import React from 'react';
import type { Question } from '../questions';

interface QuestionCardProps {
	question: Question;
	questionIndex: number;
	totalQuestions: number;
	wrongIndices: number[];
	correctAnswerClicked: boolean;
	onChoiceClick: (index: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	questionIndex,
	totalQuestions,
	wrongIndices,
	correctAnswerClicked,
	onChoiceClick,
}) => {
	const getButtonClass = (index: number) => {
		if (correctAnswerClicked && index === question.correctIndex) return 'btn correct';
		if (wrongIndices.includes(index)) return 'btn wrong';
		return 'btn';
	};

	const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

	return (
		<div className="card">
			<div className="header-text">
				שאלה {questionIndex + 1} מתוך {totalQuestions}
			</div>

			<div className="progress-bar-container">
				<div
					className="progress-bar-fill"
					style={{ width: `${progressPercentage}%` }}
				/>
			</div>

			<span className="topic-badge">{question.topic}</span>

			<h2 className="question-text">{question.prompt}</h2>

			<div className={`choices ${question.choices.length === 2 ? 'grid-2' : ''}`}>
				{question.choices.map((choice, index) => {
					const isWrong = wrongIndices.includes(index);

					return (
						<button
							key={index}
							className={getButtonClass(index)}
							onClick={() => onChoiceClick(index)}
							disabled={isWrong || correctAnswerClicked}
						>
							{choice}
						</button>
					);
				})}
			</div>
		</div>
	);
};
