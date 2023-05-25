const main = () => {
	showScores();
	setupHandlers();
};

const handleBackButton = () => {
	window.location.href = '/index.html';
};

const handleClearHighscoresButton = () => {
	localStorage.setItem('scores', JSON.stringify([]));
    showScores();
};

const setupHandlers = () => {
	const backButton = document.getElementById('back_button');
	backButton.onclick = handleBackButton;

	const clearScoresButton = document.getElementById('clear_highscore');
	clearScoresButton.onclick = handleClearHighscoresButton;
};

const getScores = () => {
	return JSON.parse(localStorage.getItem('scores') || '[]');
};

const showScores = () => {
	const scores = getScores();

	// sort score based on the score
	scores.sort((a, b) => b.score - a.score);

	const scoreElement = document.getElementById('scores');

	let scoreHtml = '<ol>';
	for (const score of scores) {
		scoreHtml += `<li>${score.initials} - ${score.score}</li>`;
	}
	scoreHtml += '</ol>';

	scoreElement.innerHTML = scoreHtml;
};

document.addEventListener(
	'DOMContentLoaded',
	function () {
		main();
	},
	false
);
