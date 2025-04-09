const lines = [
  "Welcome to Purva Patel's Free AI Course!",
  "This course will teach you how to properly use AI in your assignments...",
  "Just kidding! If you're here, you're already caught!",
  "Let's see who we caught this time...",
  "Enter your name below to see your personalized AI detection report:"
];

const bypassMessages = [
  "Analyzing your academic history...",
  "Checking past assignments for AI usage...",
  "Cross-referencing with Turnitin database...",
  "Detecting ChatGPT patterns...",
  "Found multiple instances of AI usage...",
  "Preparing your academic integrity report...",
  "Almost done...",
  "Gotcha! You've been caught!"
];

let terminal = document.getElementById('terminal');
let cursor = document.createElement('span');
cursor.className = 'cursor';
cursor.innerHTML = '&nbsp;';
terminal.appendChild(cursor);

let i = 0;
let line = 0;

function typeLine() {
  if (line < lines.length) {
    if (i < lines[line].length) {
      cursor.insertAdjacentText('beforebegin', lines[line][i]);
      i++;
      setTimeout(typeLine, 20);
    } else {
      cursor.insertAdjacentHTML('beforebegin', '\n');
      line++;
      i = 0;
      setTimeout(typeLine, 200);
    }
  } else {
    document.querySelector('.fun-input').style.display = 'block';
    document.getElementById('name').focus();
    setupInputHandler();
  }
}

function setupInputHandler() {
  const input = document.getElementById('name');
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      startTrollProcess();
    }
  });
}

function startTrollProcess() {
  const name = document.getElementById('name').value.trim();

  if (!name) {
    cursor.insertAdjacentHTML('beforebegin', '\nError: Please enter your name.');
    return;
  }

  document.querySelector('.fun-input').style.display = 'none';
  document.getElementById('progress-container').style.display = 'block';
  
  cursor.insertAdjacentHTML('beforebegin', `\nProcessing report for ${name}...`);
  
  let progress = 0;
  const progressBar = document.querySelector('.progress');
  const progressText = document.querySelector('.progress-text');
  
  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    
    if (progress % 20 === 0) {
      const message = bypassMessages[Math.floor(progress / 20) - 1];
      cursor.insertAdjacentHTML('beforebegin', `\n${message}`);
      progressText.textContent = message;
    }
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(showWarning, 1000);
    }
  }, 50);
}

function showWarning() {
  document.getElementById('warning').classList.remove('hidden');
  let count = 10;
  const countdownElement = document.getElementById('countdown');
  
  const countdown = setInterval(() => {
    count--;
    countdownElement.textContent = count;
    
    if (count <= 0) {
      clearInterval(countdown);
      window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=ShOj-2fzgqAkrmbj';
    }
  }, 1000);
}

// Add some random glitch effects
setInterval(() => {
  if (Math.random() < 0.1) {
    const glitch = document.createElement('div');
    glitch.className = 'glitch';
    glitch.style.position = 'fixed';
    glitch.style.top = Math.random() * 100 + '%';
    glitch.style.left = Math.random() * 100 + '%';
    glitch.style.width = Math.random() * 100 + 'px';
    glitch.style.height = '2px';
    glitch.style.background = '#0f0';
    glitch.style.opacity = '0.5';
    document.body.appendChild(glitch);
    
    setTimeout(() => {
      glitch.remove();
    }, 100);
  }
}, 100);

typeLine(); 