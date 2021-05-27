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

//Turn String Input into Hash - user4655293
//"a=1, b=2, c=3, d=4" => { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

function strToHash(str){
  const res = {};
  if (str) {
    str.split(', ').map(pair => {
      const [key, val] = pair.split('=');
      res[key] = Number(val);
    });
  }
  return res; 
}
