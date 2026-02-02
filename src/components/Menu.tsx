import { QuizRepository } from '../lib/repository/QuizRepository';

type MenuProps = {
	onSelectCourse: (courseId: string) => void;
};

export function Menu({ onSelectCourse }: MenuProps) {
	const courses = QuizRepository.getAllCourses();

	return (
		<div className="menu-container">
			<h1 className="app-title">פסיכולוגיה בכל הכוח!!!</h1>
			<p className="app-subtitle">בחר נושא לתרגול</p>

			<div className="course-section">
				<h2 className="section-title">🧠 תרגול פסיכולוגיה</h2>
				<div className="category-grid">
					{courses.map((course) => (
						<button
							key={course.id}
							className={`category-card ${course.color}`}
							onClick={() => onSelectCourse(course.id)}
						>
							<span className="category-label">{course.title}</span>
							<span className="category-range">{course.questionCount}</span>
							<span className="category-desc" style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '4px' }}>
								{course.description}
							</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
