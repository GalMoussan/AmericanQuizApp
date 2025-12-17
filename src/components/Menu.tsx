import type { Category } from '../questions';

type MenuProps = {
	onSelectCategory: (category: Category | 'all') => void;
};

const categories: { id: Category | 'all'; label: string; range: string }[] = [
	{ id: 'general', label: 'ביולוגיה כללית, גנטיקה ואבולוציה', range: 'שאלות 1-12' },
	{ id: 'female', label: 'מערכת הרבייה הנקבית', range: 'שאלות 13-27' },
	{ id: 'male', label: 'אנטומיה ופיזיולוגיה של הגבר', range: 'שאלות 28-42' },
	{ id: 'pregnancy', label: 'הריון, התפתחות עוברית והפריה', range: 'שאלות 43-55' },
	{ id: 'hard', label: 'שאלות מאתגרות ומשולבות', range: 'שאלות 56-100' },
	{ id: 'true-false', label: 'מבחן נכון/לא נכון (הכל)', range: 'שאלות 101-150' },
	{ id: 'expert', label: 'שאלות קשות ומאתגרות - רמה גבוהה', range: 'שאלות 151-200' },
];

export function Menu({ onSelectCategory }: MenuProps) {
	return (
		<div className="menu-container">
			<h1 className="app-title">בהצלחה לכולם במבחן, באהבה גל.</h1>
			<p className="app-subtitle">בחר נושא לתרגול</p>

			<div className="category-grid">
				{categories.map((cat) => (
					<button
						key={cat.id}
						className="category-card"
						onClick={() => onSelectCategory(cat.id)}
					>
						<span className="category-label">{cat.label}</span>
						<span className="category-range">{cat.range}</span>
					</button>
				))}
			</div>
		</div>
	);
}
