const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {  
  let str = "";
  let ddd = "";
  let n = expr.length;
  for (let i = 0; i < n; i++) {
    let pair = expr.slice(i, i + 2);
    let sign = "";
    if (pair === "00") {
      i++;
      continue;  
    } else if (pair === "10") {
      sign = ".";
      i++;
    } else if (pair === "11") {
      sign = "-";
      i++;
    } else {
      str = str + " ";
      i = i + 9;
      continue;
    }
    ddd = ddd + sign;
    if ((i + 1) % 10 !== 0) {
      continue;
    }
    str = str + MORSE_TABLE[ddd];
    ddd = "";
  }
  return str;
}

module.exports = {
    decode
}