import { QuizRepository } from '../lib/repository/QuizRepository';

type MenuProps = {
	onSelectCourse: (courseId: string) => void;
};

export function Menu({ onSelectCourse }: MenuProps) {
	const courses = QuizRepository.getAllCourses();
	const psychologyCourses = courses.filter(c => c.topic === 'Psychology');
	const coreCourses = courses.filter(c => c.topic === 'Core Studies');

	return (
		<div className="menu-container">
			<h1 className="app-title">בהצלחה לכולם במבחן, באהבה גל.</h1>
			<p className="app-subtitle">בחר נושא לתרגול</p>

			{/* Psychology Section */}
			<div className="course-section">
				<h2 className="section-title">🧠 Learning Psychology</h2>
				<div className="category-grid">
					{psychologyCourses.map((course) => (
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

			{/* Core Studies Section */}
			<div className="course-section" style={{ marginTop: '2rem' }}>
				<h2 className="section-title">📚 Core Studies</h2>
				<div className="category-grid">
					{coreCourses.map((course) => (
						<button
							key={course.id}
							className={`category-card ${course.color}`}
							onClick={() => onSelectCourse(course.id)}
						>
							<span className="category-label">{course.title}</span>
							<span className="category-range">{course.questionCount}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
