const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function morseReplacer(str) {
    let twoLetters = [];
    while (str) {
        twoLetters.push(str.slice(0, 2));
        str = str.slice(2);
    }
    for (let item in twoLetters) {
        twoLetters[item] = twoLetters[item].replace(/00/g, '');
        twoLetters[item] = twoLetters[item].replace(/10/g, '.');
        twoLetters[item] = twoLetters[item].replace(/11/g, '-');
    }

    return twoLetters.join('');
}

function decode(expr) {
    let letterArrays = [];

    while (expr) {
        letterArrays.push(expr.slice(0, 10));
        expr = expr.slice(10);
    }    

    for (let item in letterArrays) {
        if (letterArrays[item] === '**********') {
            letterArrays[item] = letterArrays[item].replace('**********', ' ');
        } else {
            letterArrays[item] = morseReplacer(letterArrays[item]);
        }
    }

    for (let i = 0; i < letterArrays.length; i++) {
        for (let [key, value] of Object.entries(MORSE_TABLE)) {
            if (letterArrays[i] === key) {
                letterArrays[i] = value;
                break;
            }
        }
    }

    return letterArrays.join('');
}

module.exports = {
    decode
}