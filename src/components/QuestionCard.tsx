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
	// Helper removed, logic inline for clarity with new classes

	const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

	const categoryLabels: Record<string, string> = {
		'general': 'ביולוגיה כללית',
		'female': 'מערכת הרבייה הנקבית',
		'male': 'אנטומיה ופיזיולוגיה של הגבר',
		'pregnancy': 'הריון והתפתחות',
		'hard': 'שאלות מאתגרות',
		'true-false': 'נכון/לא נכון'
	};

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

			<span className="topic-badge">{categoryLabels[question.category] || question.category}</span>

			<h2 className="question-text">{question.prompt}</h2>

			<div className={`choices ${question.choices.length === 2 ? 'grid-2' : ''}`}>
				{question.choices.map((choice, index) => {
					// Check status
					const isWrong = wrongIndices.includes(index);
					// Determine class based on state
					let className = 'choice-btn';
					if (correctAnswerClicked && index === question.correctIndex) {
						className += ' correct';
					} else if (isWrong) {
						className += ' wrong';
					}

					return (
						<button
							key={index}
							className={className}
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
