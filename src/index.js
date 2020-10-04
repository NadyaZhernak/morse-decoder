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
    let arr = [];
    let letter = '';
    let symbol = '';
    let word = '';
    for (let i = 0; i < expr.length; i++) {
        if ((i + 1) % 10 === 0) {
            letter += expr[i];
            arr.push(letter);
            letter = '';
        } else {
            letter += expr[i];
        }        
    } 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '*') {
                letter = ' ';
            } else if (arr[i][j] === '0') {
                continue;
            } else {
                symbol = arr[i][j] + arr[i][j + 1];
                if (symbol === '10') {
                    letter += '.';
                } else {
                    letter += '-';
                }
                symbol = '';
                j++;
            }            
        }
        arr[i] = letter;
        letter = '';
    } 
    for (let i = 0; i < arr.length; i++) {
        word += (arr[i] === ' ') ? ' ' : MORSE_TABLE[arr[i]]; 
    }
    return word;
}

module.exports = {
    decode
}