document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const textOutput = document.getElementById('textOutput');

  const fonts = [
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Verdana',
    'Comic Sans MS',
    'Impact',
    'Trebuchet MS',
    'Dancing Script',
    'Pacifico',
    'Lobster',
    'Sacramento',
    'Shadows Into Light',
    'Playfair Display',
    'Shadows Into Light Two',
    'Merriweather',
  ];

  const getRandomFont = () => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    return fonts[randomIndex];
  };

  const getRandomFontSize = () => {
    const minFontSize = 30; // Adjust minimum font size as needed
    const maxFontSize = 45; // Adjust maximum font size as needed
    return Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize + 'px';
  };

  const adjustFontSize = () => {
    const canvasWidth = textOutput.clientWidth;
    const canvasHeight = textOutput.clientHeight;

    textOutput.style.fontSize = '2rem';

    const textWidth = textOutput.scrollWidth;
    const textHeight = textOutput.scrollHeight;

    const widthRatio = canvasWidth / textWidth;
    const heightRatio = canvasHeight / textHeight;
    const newFontSize = Math.min(widthRatio, heightRatio) * parseFloat(getComputedStyle(textOutput).fontSize);

    textOutput.style.fontSize = `${newFontSize}px`;
  };


  const updateTextOutput = () => {
    const words = textInput.value.split(/(\s+)/); // Split on spaces and non-breaking spaces
    textOutput.innerHTML = '';

    words.forEach(word => {
      if (word.trim() === '') {
        textOutput.appendChild(document.createTextNode(word));
      } else {
        const span = document.createElement('span');
        // Truncate word to a maximum of 200 characters
        span.textContent = word.slice(0, 200); 
        span.style.fontFamily = getRandomFont();
        span.style.fontSize = getRandomFontSize(); 
        textOutput.appendChild(span);
      }
    });

    if (textInput.value.trim() === '') {
      textOutput.innerHTML = '<span style="font-family: Arial;">Type here...</span>';
    }

    adjustFontSize();
  };

  let isCenterAligned = true; // Initial state for text alignment

  
 
  
  // Event listeners for input, resize, and button click
  textInput.addEventListener('input', updateTextOutput);
  window.addEventListener('resize', adjustFontSize);

      document.body.style.backgroundColor = '#f0f0f0'; // Gray theme
      textOutput.style.color = '#333';
  
  updateTextOutput();
});