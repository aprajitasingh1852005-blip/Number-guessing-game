let secret, attempts;

const input      = document.getElementById('guessInput');
const submitBtn  = document.getElementById('submitBtn');
const feedback   = document.getElementById('feedback');
const attemptsEl = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

function startGame() {
  secret    = Math.floor(Math.random() * 100) + 1;
  attempts  = 0;
  feedback.textContent  = '';
  feedback.className    = 'feedback';
  attemptsEl.textContent = '';
  input.value = '';
  input.disabled   = false;
  submitBtn.disabled = false;
  restartBtn.classList.add('hidden');
}

function checkGuess() {
  const guess = parseInt(input.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = '⚠️ Enter a number between 1–100.';
    feedback.className = 'feedback';
    return;
  }

  attempts++;

  if (guess > secret) {
    feedback.textContent = '📈 Too High!';
    feedback.className = 'feedback high';
  } else if (guess < secret) {
    feedback.textContent = '📉 Too Low!';
    feedback.className = 'feedback low';
  } else {
    feedback.textContent = `🎉 Correct! The number was ${secret}.`;
    feedback.className = 'feedback win';
    input.disabled = true;
    submitBtn.disabled = true;
    restartBtn.classList.remove('hidden');
  }

  attemptsEl.textContent = `Attempts: ${attempts}`;
  input.value = '';
  input.focus();
}

submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', startGame);
input.addEventListener('keydown', e => { if (e.key === 'Enter') checkGuess(); });

startGame();