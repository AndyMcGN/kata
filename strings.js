// 6kyu 

// 0Decode to Morse code - jolaf
// e.g. decodeMorse('.... . -.--   .--- ..- -.. .') => "HEY JUDE";
// Morse code table was already preloaded as dictionary

decodeMorse = function(morseCode){
  const morseWords = morseCode.trim().split('   ');

  const humanWordArray = morseWords.map(word => {
    return word.split(' ')
    .reduce((res, letter) => {
      return res += MORSE_CODE[letter];
    }, '');
  })
  
  return humanWordArray.join(' ');
}

