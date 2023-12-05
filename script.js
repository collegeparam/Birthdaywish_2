const texts = [
  "Hey, what's up?",
  "Param this side👨🥸",
  "umm, Today is 5th December?",
  "I forget it as usual😂",
  "I have nothing to gift you but",
  "I have something, to make it for you."
];

const textContainer = document.getElementById('text-container');
let textIndex = 0;
let charIndex = 0;
let stopLoop = false;

function typeText() {
  if (charIndex < texts[textIndex].length && textIndex < texts.length && !stopLoop) {
    textContainer.innerHTML += texts[textIndex].charAt(charIndex);
    if (textIndex === texts.length && charIndex === 0) {
      
      stopLoop = true; 
    }
    
    charIndex++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    const currentText = texts[textIndex].substring(0, charIndex - 1);
    textContainer.innerHTML = currentText;
    charIndex--;
    setTimeout(eraseText, 1);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    if (!stopLoop && textIndex === 0) {
      stopLoop = true;
      window.location.href="index2.html";
      return;
    }
    setTimeout(typeText, 500);
  }
}

typeText();
