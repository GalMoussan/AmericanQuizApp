import { useState, useEffect } from 'react';
import type { Question } from '../questions';

type QuizLoaderProps = {
	onBack: () => void;
	onQuestionsUpdate: (questions: Question[] | null) => void;
};

export function QuizLoader({ onBack, onQuestionsUpdate }: QuizLoaderProps) {
	const [textInput, setTextInput] = useState('');
	const [parseStatus, setParseStatus] = useState<{ success: boolean; message: string } | null>(null);
	const [existingCount, setExistingCount] = useState<number | null>(null);

	useEffect(() => {
		const saved = localStorage.getItem('custom_questions');
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed)) {
					setExistingCount(parsed.length);
				}
			} catch (e) {
				console.error("Failed to parse existing questions", e);
			}
		}
	}, []);

	const parseQuestions = (text: string): Question[] => {
		// Split by double newlines to separate questions
		// This is a heuristic: ideally users paste "Question 1... \n a) ... \n\n Question 2..."
		const rawBlocks = text.split(/\n\s*\n/);
		const parsedQuestions: Question[] = [];
		let idCounter = 1;

		for (const block of rawBlocks) {
			const lines = block.split('\n').map(line => line.trim()).filter(line => line.length > 0);
			if (lines.length < 3) continue; // Need at least prompt + 2 answers

			// Assume first line is prompt
			const prompt = lines[0].replace(/^(\d+\.|שאלה\s*\d+:?)\s*/, ''); // Clean "1." or "שאלה 1:"

			// Look for choices (starting with a-d, 1-4, or Hebrew letters)
			// And correct answer marker
			const choices: string[] = [];
			let correctIndex = -1;

			// Extract choices and check for answer marker in the block
			// Common formats: 
			// 1. Choice text
			// 2. Choice text ...
			// התשובה הנכונה: ג

			// Or:
			// a) choice
			// b) choice * (marked)

			// Let's iterate lines 1..end
			for (let i = 1; i < lines.length; i++) {
				const line = lines[i];

				// specific check for "answer: x" or "תשובה: ג" line
				const answerMatch = line.match(/(?:תשובה|answer|correct):\s*([א-דa-d1-4])/i);
				if (answerMatch) {
					// Map answer letter/number to index
					const ansChar = answerMatch[1].toLowerCase();
					if (ansChar >= '1' && ansChar <= '4') correctIndex = parseInt(ansChar) - 1;
					if (ansChar === 'a' || ansChar === 'א') correctIndex = 0;
					if (ansChar === 'b' || ansChar === 'ב') correctIndex = 1;
					if (ansChar === 'c' || ansChar === 'ג') correctIndex = 2;
					if (ansChar === 'd' || ansChar === 'ד') correctIndex = 3;
					continue; // Don't add this line as a choice
				}

				// Just add strictly as a choice, stripping markers like "a)" "1."
				// We assume indentation or list format
				const choiceText = line.replace(/^([a-dא-ד1-4][.)])\s*/i, '');
				choices.push(choiceText);
			}

			// 4 choices max for this app usually, but logic allows dynamic. 
			// If we didn't find specific answer line, maybe it's marked with *?
			// Not handling * parsing for now to keep simple as requested initially.

			// If we found valid struct
			if (choices.length >= 2 && correctIndex !== -1) {
				parsedQuestions.push({
					id: `custom-${idCounter++}`,
					prompt,
					choices,
					correctIndex: correctIndex as 0 | 1 | 2 | 3,
					category: 'general' // Default category for custom questions for now, or 'custom' if we add it
				});
			}
		}
		return parsedQuestions;
	};

	const handleLoad = () => {
		if (!textInput.trim()) return;

		try {
			const questions = parseQuestions(textInput);
			if (questions.length === 0) {
				setParseStatus({ success: false, message: 'לא זוהו שאלות תקינות. וודא שיש רווח כפול בין שאלות ושיש שורת "תשובה: X".' });
				return;
			}

			localStorage.setItem('custom_questions', JSON.stringify(questions));
			setExistingCount(questions.length);
			setParseStatus({ success: true, message: `הוטענו ${questions.length} שאלות בהצלחה!` });
			onQuestionsUpdate(questions);
		} catch (e) {
			setParseStatus({ success: false, message: 'שגיאה בעיבוד השאלות.' });
		}
	};

	const handleClear = () => {
		localStorage.removeItem('custom_questions');
		setExistingCount(null);
		setParseStatus({ success: true, message: 'השאלות הוסרו. חוזרים לברירת המחדל.' });
		onQuestionsUpdate(null);
	};

	return (
		<div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
			<h2 className="app-title" style={{ fontSize: '2rem' }}>טעינת שאלות</h2>
			<p className="app-subtitle">הדבק כאן שאלות בפורמט חופשי. הקפד על שורה רווח בין שאלות, וציון התשובה הנכונה.</p>

			<div style={{ margin: '1rem 0' }}>
				{existingCount !== null ? (
					<div style={{ padding: '1rem', background: '#ecfdf5', color: '#065f46', borderRadius: '8px', marginBottom: '1rem' }}>
						🟢 ישנן {existingCount} שאלות מותאמות אישית במערכת.
					</div>
				) : (
					<div style={{ padding: '1rem', background: '#eff6ff', color: '#1e40af', borderRadius: '8px', marginBottom: '1rem' }}>
						ℹ️ המערכת משתמשת בשאלות ברירת המחדל (150).
					</div>
				)}
			</div>

			<textarea
				className="btn" // reuse parsing style roughly
				style={{ minHeight: '300px', textAlign: 'right', fontFamily: 'monospace', fontSize: '0.9rem', cursor: 'text', background: '#f9fafb' }}
				placeholder={`דוגמה:
מהי בירת צרפת?
א. לונדון
ב. פריז
ג. ברלין
ד. מדריד
תשובה: ב

שאלה הבאה...`}
				value={textInput}
				onChange={(e) => setTextInput(e.target.value)}
			/>

			{parseStatus && (
				<div style={{
					margin: '1rem 0',
					padding: '1rem',
					borderRadius: '8px',
					background: parseStatus.success ? '#ecfdf5' : '#fef2f2',
					color: parseStatus.success ? '#065f46' : '#991b1b',
					fontWeight: 'bold'
				}}>
					{parseStatus.message}
				</div>
			)}

			<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
				<button className="btn" style={{ background: '#3b82f6', color: 'white', borderColor: '#3b82f6' }} onClick={handleLoad}>
					טען שאלות
				</button>
				<button className="btn wrong" onClick={handleClear} disabled={existingCount === null}>
					אפס לברירת מחדל
				</button>
			</div>

			<button className="btn" onClick={onBack} style={{ marginTop: '1rem' }}>
				חזור לתפריט
			</button>
		</div>
	);
}
