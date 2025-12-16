import type { Category } from '../questions';

type MenuProps = {
	onSelectCategory: (category: Category | 'all') => void;
	onOpenLoader: () => void;
};

export function Menu({ onSelectCategory, onOpenLoader }: MenuProps) {
	return (
		<div className="menu-container">
			<h1 className="app-title">בהצלחה לכולם במבחן, באהבה גל.</h1>
			<p className="app-subtitle">בחר נושא לתרגול</p>

			<div className="category-grid">
				<div className="category-card" onClick={() => onSelectCategory('general')}>
					<span className="category-label">🧬 ביולוגיה כללית</span>
					<span className="category-range">שאלות 1-12</span>
				</div>

				<div className="category-card" onClick={() => onSelectCategory('female')}>
					<span className="category-label">🚺 מערכת רבייה נקבית</span>
					<span className="category-range">שאלות 13-27</span>
				</div>

				<div className="category-card" onClick={() => onSelectCategory('male')}>
					<span className="category-label">🚹 מערכת רבייה זכרית</span>
					<span className="category-range">שאלות 28-42</span>
				</div>

				<div className="category-card" onClick={() => onSelectCategory('pregnancy')}>
					<span className="category-label">🤰 הריון והתפתחות</span>
					<span className="category-range">שאלות 43-55</span>
				</div>

				<div className="category-card" onClick={() => onSelectCategory('hard')}>
					<span className="category-label">🔥 שאלות מאתגרות</span>
					<span className="category-range">שאלות 56-100</span>
				</div>

				<div className="category-card" onClick={() => onSelectCategory('true-false')}>
					<span className="category-label">✅ / ❌ נכון או לא נכון</span>
					<span className="category-range">שאלות 101-150</span>
				</div>
			</div>

			<div style={{ marginTop: '3rem', opacity: 0.7 }}>
				<button
					onClick={onOpenLoader}
					style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '0.9rem', textDecoration: 'underline' }}
				>
					⚙️ ניהול שאלות / טען משלי
				</button>
			</div>
		</div>
	);
}
