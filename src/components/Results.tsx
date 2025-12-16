import React from 'react';

interface ResultsProps {
	score: number;
	totalQuestions: number;
	onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart }) => {
	const percentage = Math.round((score / totalQuestions) * 100);

	return (
		<div className="card" style={{ textAlign: 'center' }}>
			<h1 className="question-text">סיום המבחן!</h1>
			<p className="header-text">הציון שלך</p>
			<div className="result-score">{percentage}</div>
			<p style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>
				ענית נכון על {score} מתוך {totalQuestions} שאלות
			</p>
			<button className="btn restart-btn" onClick={onRestart}>
				התחל מבחן חדש
			</button>
		</div>
	);
};
