const main = () => {
	setupSaveScoreButtonHandler();
	setupFinalScore();
};

const handleSaveScoreButton = () => {
	const initialsElement = document.getElementById('initials-input');
	const initials = initialsElement.value;
	addScoreInTheStorage(initials, getScore());
	initialsElement.innerHTML = '';
	location.href = '/index.html';
};

const setupSaveScoreButtonHandler = () => {
	const saveScoreButton = document.getElementById('save_score');
	saveScoreButton.onclick = handleSaveScoreButton;
};

const setupFinalScore = () => {
	const finalScoreElement = document.getElementById('final_score');
	finalScoreElement.innerHTML = getScore();
};

const getScore = () => {
	const finalScore = localStorage.getItem('finalScore') || 0;
	return finalScore;
};

const addScoreInTheStorage = (initials, score) => {
	const scores = JSON.parse(localStorage.getItem('scores') || '[]');
	scores.push({ initials, score });
	localStorage.setItem('scores', JSON.stringify(scores));
};

document.addEventListener(
	'DOMContentLoaded',
	function () {
		main();
	},
	false
);
