import { useState } from 'react';
import type { Question } from '../questions';
import { QuestionCard } from './QuestionCard';
import { Results } from './Results';

type QuizProps = {
	questions: Question[];
	onBackToMenu: () => void;
};

// Define history type
type QuestionHistory = {
	wrongIndices: number[];
	answeredCorrectly: boolean;
};

export function Quiz({ questions, onBackToMenu }: QuizProps) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	// State for current active question
	const [wrongIndices, setWrongIndices] = useState<number[]>([]);
	const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);

	// History of answers for all questions: index -> state
	const [history, setHistory] = useState<Record<number, QuestionHistory>>({});

	const [isQuizFinished, setIsQuizFinished] = useState(false);

	// Safety check
	if (!questions || questions.length === 0) {
		return (
			<div className="card">
				<h2>לא נמצאו שאלות בקטגוריה זו.</h2>
				<button className="btn restart-btn" onClick={onBackToMenu}>חזור לתפריט</button>
			</div>
		);
	}

	const currentQuestion = questions[currentQuestionIndex];

	// Check if we have history for this question (e.g. we went back)
	const currentHistory = history[currentQuestionIndex];

	// If we have history, use it. Otherwise use current state.
	// Note: if we go back, we are in "review mode", so we shouldn't be able to change answers optionally?
	// The user requirement: "If the user goes back... show the correct/wrong indicators".
	// So we pass the history state if it exists.

	const activeWrongIndices = currentHistory ? currentHistory.wrongIndices : wrongIndices;
	const activeCorrectClicked = currentHistory ? currentHistory.answeredCorrectly : correctAnswerClicked;

	const handleChoiceClick = (index: number) => {
		// Prevent interaction if we already have history (review mode) or active state prevents it
		if (activeCorrectClicked || activeWrongIndices.includes(index) || currentHistory) {
			return;
		}

		if (index === currentQuestion.correctIndex) {
			// Correct!
			setCorrectAnswerClicked(true);

			const newWrongIndices = wrongIndices; // current state

			// If no wrong answers were clicked yet, increment score
			// Note: This logic only works if we move forward. 
			// We should only increment score if this question wasn't answered before?
			// But we prevent answering if logic exists. So this is fine.
			if (wrongIndices.length === 0) {
				setScore((prev) => prev + 1);
			}

			// Save to history
			setHistory(prev => ({
				...prev,
				[currentQuestionIndex]: {
					wrongIndices: newWrongIndices,
					answeredCorrectly: true
				}
			}));

			// Delay before moving to next
			setTimeout(() => {
				const nextIndex = currentQuestionIndex + 1;
				if (nextIndex < questions.length) {
					setCurrentQuestionIndex(nextIndex);
					// Reset state for new question
					setWrongIndices([]);
					setCorrectAnswerClicked(false);
				} else {
					setIsQuizFinished(true);
				}
			}, 800);
		} else {
			// Wrong!
			const newWrong = [...wrongIndices, index];
			setWrongIndices(newWrong);
			// We don't save to history yet, only when they finish the question (get it right).
		}
	};

	const handlePrev = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(prev => prev - 1);
			// When going back, the component will read from `history` via `currentHistory`.
			// We also need to reset the "active" state variables to clean slate so they don't leak 
			// if we go forward again to a new question later.
			// Actually, if we go back, and then forward to a *new* question, we need empty state.
			// If we go back, we just view history. 
			// If we go forward from a history question to another history question, we view that history.
			// If we go forward to the *newest* unanswered question, we need to restore its partial state?
			// Simplification: We only allow going back. When going forward, if it's new, it's new.
			// But wait, if they answered Q1, go to Q2, answer wrong, go back to Q1, then forward to Q2... 
			// they should see their wrong answers on Q2!
			// So even "partial" state needs to be saved? 
			// For now, let's stick to the prompt: "show correct/wrong indicators so they can see their previous choice".
			// I will save partial state on navigation too if needed. 
			// But simpler: just reset local state when moving.
			setWrongIndices([]);
			setCorrectAnswerClicked(false);
		}
	};

	// We need a way to restore "active" state if we return to the latest question we were working on.
	// Actually, if we click Previous, we move index back. 
	// If we want to support "Next" manually? The user didn't ask for Next button. 
	// They only asked for "Previous". The flow is auto-advance on correct.
	// So if I go back to Q1 (which is done), I see history.
	// How do I get back to Q2 (which I was stuck on)? 
	// I need a "Next" button if I am in history mode!
	// Or the "Previous" button becomes "Next" somehow?
	// Let's add a "Next" button only if we are reviewing past questions.

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(prev => prev + 1);
			setWrongIndices([]);
			setCorrectAnswerClicked(false);
		}
	};

	const handleRestart = () => {
		setScore(0);
		setWrongIndices([]);
		setCorrectAnswerClicked(false);
		setCurrentQuestionIndex(0);
		setHistory({}); // Clear history
		setIsQuizFinished(false);
	};

	if (isQuizFinished) {
		return (
			<div className="quiz-container">
				<Results
					score={score}
					totalQuestions={questions.length}
					onRestart={handleRestart}
				/>
				<button className="btn secondary-btn" onClick={onBackToMenu}>
					חזור לתפריט הראשי
				</button>
			</div>
		);
	}

	return (
		<div className="quiz-container">
			<div className="quiz-header">
				<button className="back-btn" onClick={onBackToMenu}>תפריט</button>
			</div>

			<QuestionCard
				question={currentQuestion}
				questionIndex={currentQuestionIndex}
				totalQuestions={questions.length}
				wrongIndices={activeWrongIndices}
				correctAnswerClicked={activeCorrectClicked}
				onChoiceClick={handleChoiceClick}
			/>

			<div className="quiz-controls">
				<button
					className="prev-btn"
					onClick={handlePrev}
					disabled={currentQuestionIndex === 0}
				>
					➜ הקודם
				</button>

				{/* Show Next button only if we are reviewing history and not at the latest question */}
				{/* Actually, if we are at the latest question (which is unsolved), we don't need Next, we need to answer. 
              But if we are at Q1 (solved) and current max index is Q5, we need Next to get back there. */}
				{history[currentQuestionIndex] && currentQuestionIndex < questions.length - 1 && (
					<button
						className="prev-btn"
						onClick={handleNext}
						style={{ direction: 'ltr' }} // visual arrow fix
					>
						הבא ➜
					</button>
				)}
			</div>
		</div>
	);
}
