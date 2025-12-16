// Helper to beautify default IDs if they match known keys, otherwise pass through
const labelMap: Record<string, string> = {
	'general': '🧬 ביולוגיה כללית',
	'female': '🚺 מערכת רבייה נקבית',
	'male': '🚹 מערכת רבייה זכרית',
	'pregnancy': '🤰 הריון והתפתחות',
	'hard': '🔥 שאלות מאתגרות',
	'true-false': '✅ / ❌ נכון או לא נכון',
	'כללי': '📚 ידע כללי' // Default for custom
};

type MenuProps = {
	categories: { id: string; label: string; count: number }[];
	onSelectCategory: (category: string | 'all') => void;
	onOpenLoader: () => void;
};

export function Menu({ categories, onSelectCategory, onOpenLoader }: MenuProps) {
	return (
		<div className="menu-container">
			<h1 className="app-title">בהצלחה לכולם במבחן, באהבה גל.</h1>
			<p className="app-subtitle">בחר נושא לתרגול ({categories.length} נושאים זמינים)</p>

			<div className="category-grid">
				{categories.map((cat) => (
					<div key={cat.id} className="category-card" onClick={() => onSelectCategory(cat.id)}>
						<span className="category-label">{labelMap[cat.id] || cat.label}</span>
						<span className="category-range">{cat.count} שאלות</span>
					</div>
				))}
			</div>

			<div style={{ marginTop: '3rem', opacity: 0.7 }}>
				<button
					onClick={onOpenLoader}
					style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '0.9rem', textDecoration: 'underline' }}
				>
					⚙️ ניהול שאלות / טען משלי
				</button>
				<p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#9ca3af' }}>v1.1 - JSON Upload System</p>
			</div>
		</div>
	);
}
