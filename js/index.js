const main = () => {
	setupHandlers();
};

const handleStartQuizButton = () => {
	window.location.href = "/html/quiz.html"
};

const setupHandlers = () => {
	const startQuizButton = document.getElementById('start_quiz_button');
	startQuizButton.onclick = handleStartQuizButton;
};

document.addEventListener(
	'DOMContentLoaded',
	function () {
		main();
	},
	false
);
