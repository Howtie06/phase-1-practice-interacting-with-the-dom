const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

let timer = setInterval(() => {
  counter.textContent = parseInt(counter.textContent) + 1;
}, 1000);

minusButton.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

plusButton.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

heartButton.addEventListener('click', () => {
  const currentNumber = counter.textContent;
  const existingLike = document.querySelector(`.likes li[data-number="${currentNumber}"]`);

  if (existingLike) {
    const likeCount = existingLike.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    const newLike = document.createElement('li');
    newLike.dataset.number = currentNumber;
    newLike.innerHTML = `${currentNumber} has been liked <span class="like-count">1</span> times.`;
    likesList.appendChild(newLike);
  }
});

pauseButton.addEventListener('click', () => {
  if (pauseButton.textContent === 'pause') {
    clearInterval(timer);
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
    pauseButton.textContent = 'resume';
  } else {
    timer = setInterval(() => {
      counter.textContent = parseInt(counter.textContent) + 1;
    }, 1000);
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.textContent = 'pause';
  }
});

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = commentInput.value.trim();
  if (comment !== '') {
    const newComment = document.createElement('div');
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    commentInput.value = '';
  }
});