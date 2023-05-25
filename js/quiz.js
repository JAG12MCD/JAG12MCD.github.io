currentQuestionIndex = 0;
timerInterval = null;
timer = 75;

const main = () => {
	hideAnswer();
	setupHandlers();
	setupQuestion();
	startTimer();
};

const showAnswer = (isCorrect) => {
	const hrElement = document.getElementById('h_line');
	hrElement.style.display = 'block';

	const answerElement = document.getElementById('answer');
	answerElement.style.display = 'block';

	if (isCorrect) {
		answerElement.innerHTML = 'Correct';
	} else answerElement.innerHTML = 'Wrong';
};

const hideAnswer = () => {
	const hrElement = document.getElementById('h_line');
	hrElement.style.display = 'none';

	const answerElement = document.getElementById('answer');
	answerElement.style.display = 'none';
};

const startTimer = () => {
	const timerElement = document.getElementById('timer_count');
	timerInterval = setInterval(() => {
		timerElement.innerHTML = timer;
		timer--;

		if (timer < 0) clearInterval(timerInterval);
	}, 1000);
};

const setupQuestion = () => {
	if (currentQuestionIndex >= questions.length) {
		clearInterval(timerInterval);
		storeScore(timer);
		window.location.href = 'final.html';
	} else {
		const question = questions[currentQuestionIndex].question;
		const questionElement = document.getElementById('question');
		questionElement.innerHTML = question;

		setupOptions();
	}
};

const storeScore = (score) => {
	localStorage.setItem('finalScore', score);
};

const setupOptions = () => {
	const options = questions[currentQuestionIndex].options;
	for (let i = 1; i <= 4; i++) {
		const option = options[i - 1];
		const optionElement = document.getElementById('answer' + i);
		optionElement.innerHTML = i + '. ' + option;
	}
};

const setupHandlers = () => {
	setupOptionButtonHandlers();
};

const setupOptionButtonHandlers = () => {
	for (let i = 1; i <= 4; i++) {
		const optionElement = document.getElementById('answer' + i);
		optionElement.onclick = () => handleOptionButton(i);
	}
};

const handleOptionButton = (answer) => {
	const correctAnswer = questions[currentQuestionIndex].correctAnswer;
	if (correctAnswer === answer) {
		showAnswer(true);
	} else {
		timer -= 10;
		showAnswer(false);
	}
	currentQuestionIndex++;
	setupQuestion();
};

document.addEventListener(
	'DOMContentLoaded',
	function () {
		main();
	},
	false
);
