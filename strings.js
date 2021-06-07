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


// unfinished - mutations game 
function mutations(alice, bob, startingWord, first){
  //game setup
  let currentPlayer = first === 0 ? alice : bob;
  let currentPlayerName = first === 0 'alice' : 'bob';
  let currentWord = startingWord;
  // take a turn
  let i = 0
  while (currentWord != undefined) {
      currentWord = takeTurn(currentWord, currentPlayer)[0]
      console.log({currentPlayer}, {currentWord})
      i++;
  }
} 

function takeTurn(lastWord, playerWords) {
  let newWord = playerWords.filter(word => {
    let sameChars = 0;
   [...lastWord].forEach(char => {
      if (word.includes(char)) {
        sameChars++;
      }
    })
    return sameChars === 3;
     })
  // remove word from memory
  playerWords.splice(playerWords.indexOf(newWord[0]), 1)
  return newWord
}

const alice = ['plat', 'rend', 'bear', 'soar', 'mare', 'pare', 'flap', 'neat', 'clan', 'pore'], bob = ['boar', 'clap', 'farm', 'lend', 'near', 'peat', 'pure', 'more', 'plan', 'soap'];


mutations(alice,bob,'maze',0)