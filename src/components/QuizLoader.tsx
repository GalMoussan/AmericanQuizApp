import { useState, useEffect } from 'react';
import type { Question } from '../questions';

type QuizLoaderProps = {
	onBack: () => void;
	onQuestionsUpdate: (questions: Question[] | null) => void;
};

export function QuizLoader({ onBack, onQuestionsUpdate }: QuizLoaderProps) {
	const [file, setFile] = useState<File | null>(null);
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

	const downloadTemplate = () => {
		const template = [
			{
				"id": "q1",
				"category": "מדעים",
				"prompt": "מהם המים?",
				"choices": ["H2O", "CO2", "O2", "NaCl"],
				"correctIndex": 0
			},
			{
				"id": "q2",
				"category": "היסטוריה",
				"prompt": "מי היה הנשיא הראשון של ארה\"ב?",
				"choices": ["לינקולן", "וושינגטון", "ג'פרסון", "אדמס"],
				"correctIndex": 1
			}
		];
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(template, null, 2));
		const downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href", dataStr);
		downloadAnchorNode.setAttribute("download", "quiz_template.json");
		document.body.appendChild(downloadAnchorNode);
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFile(e.target.files[0]);
			setParseStatus(null);
		}
	};

	const handleLoad = () => {
		if (!file) {
			setParseStatus({ success: false, message: 'אנא בחר קובץ JSON תחילה.' });
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const json = JSON.parse(event.target?.result as string);

				// Basic Validation
				if (!Array.isArray(json)) {
					throw new Error('הקובץ אינו מכיל מערך תקין.');
				}

				const validQuestions: Question[] = [];
				let index = 1;
				for (const item of json) {
					if (!item.prompt || !Array.isArray(item.choices) || typeof item.correctIndex !== 'number') {
						throw new Error(`שאלה מספר ${index} אינה תקינה (חסר שדה חובה).`);
					}
					// Ensure category exists, default to 'כללי' if missing
					validQuestions.push({
						id: item.id || `custom-${index}`,
						prompt: item.prompt,
						choices: item.choices,
						correctIndex: item.correctIndex as 0 | 1 | 2 | 3,
						category: item.category || 'כללי'
					});
					index++;
				}

				if (validQuestions.length === 0) {
					throw new Error('לא נמצאו שאלות בקובץ.');
				}

				localStorage.setItem('custom_questions', JSON.stringify(validQuestions));
				setExistingCount(validQuestions.length);
				setParseStatus({ success: true, message: `הוטענו ${validQuestions.length} שאלות בהצלחה!` });
				onQuestionsUpdate(validQuestions);

				// Optional: Auto redirect after success? 
				// For now, let user see message and click back.

			} catch (e: any) {
				setParseStatus({ success: false, message: `שגיאה בקובץ: ${e.message}` });
			}
		};
		reader.readAsText(file);
	};

	const handleClear = () => {
		localStorage.removeItem('custom_questions');
		setExistingCount(null);
		setParseStatus({ success: true, message: 'השאלות הוסרו. חוזרים לברירת המחדל.' });
		onQuestionsUpdate(null);
	};

	return (
		<div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
			<h2 className="app-title" style={{ fontSize: '2rem' }}>טעינת שאלות מקובץ</h2>
			<p className="app-subtitle">העלה קובץ JSON עם מאגר השאלות שלך.</p>

			<div style={{ margin: '1rem 0', textAlign: 'center' }}>
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

			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '2rem', border: '2px dashed #ccc', borderRadius: '12px', background: '#f9fafb' }}>
				<input
					type="file"
					accept=".json"
					onChange={handleFileChange}
					style={{ fontSize: '1.2rem' }}
				/>

				<button
					onClick={downloadTemplate}
					style={{ background: 'transparent', border: 'none', textDecoration: 'underline', color: '#6b7280', cursor: 'pointer' }}
				>
					📥 הורד קובץ דוגמה (Template)
				</button>
			</div>

			{parseStatus && (
				<div style={{
					margin: '1rem 0',
					padding: '1rem',
					borderRadius: '8px',
					background: parseStatus.success ? '#ecfdf5' : '#fef2f2',
					color: parseStatus.success ? '#065f46' : '#991b1b',
					fontWeight: 'bold',
					textAlign: 'center'
				}}>
					{parseStatus.message}
				</div>
			)}

			<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
				<button className="btn" style={{ background: '#3b82f6', color: 'white', borderColor: '#3b82f6', width: 'auto', padding: '1rem 2rem' }} onClick={handleLoad}>
					🚀 טען וייצר מבחן
				</button>
				<button className="btn wrong" style={{ width: 'auto' }} onClick={handleClear} disabled={existingCount === null}>
					🗑️ אפס לברירת מחדל
				</button>
				<button className="btn" style={{ width: 'auto', background: '#9ca3af', borderColor: '#9ca3af', color: 'white' }} onClick={() => {
					localStorage.clear();
					window.location.reload();
				}}>
					🧹 מחק Cache
				</button>
			</div>

			<button className="btn" onClick={onBack} style={{ marginTop: '2rem' }}>
				חזור לתפריט
			</button>
		</div >
	);
}
