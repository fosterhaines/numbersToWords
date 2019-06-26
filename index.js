//Convert numbers to words
//Create a function in javascript to convert a number to words, e.g.
// 1 returns “one”
// 10 returns “ten”
// 11 returns “eleven”
// 22 returns “twenty two”
// 111 returns “one hundred and eleven”
// 120 returns “one hundred and twenty”
// 121 returns “one hundred and twenty one”
// 300 returns “three hundred”
//Range should be from 1 - 9999

function convertNumberToWord(numberToConvert) {
    let wordToReturn = '';
    //verify number between 1 and 9999
    if(numberToConvert < 1 || numberToConvert > 9999) {
        return "Number passed in is not in range";
    }

    let numberAsString = numberToConvert.toString();

    //convert thousands number to word
    if(numberToConvert > 999) {
        wordToReturn = getWordMatchingOnesNumber(numberAsString[0]) + " thousand";
        numberAsString = numberAsString.substr(1,3);
    }
    //convert hundreds number to word
    if(numberToConvert > 99) {
        const hundredAsWord = getWordMatchingOnesNumber(numberAsString[0]);
        if (hundredAsWord !== 'zero') {
            if (wordToReturn === '') {
                wordToReturn = hundredAsWord + " hundred";
            } else {
                wordToReturn += " and " + hundredAsWord + " hundred";
            }
        }
        numberAsString = numberAsString.substr(1,2);
    }
    //convert tens number to word
    if(numberToConvert > 9) {
        const tensAsWord = getWordMatchingTensNumber(numberAsString);

            if (wordToReturn === '') {
                wordToReturn = tensAsWord;
            } else {
                wordToReturn += " and " + tensAsWord;
            }

        if (numberAsString.substr(0,1) === '1') {
            numberAsString = "0";
        } else {
            numberAsString = numberAsString.substr(1, 1);
        }
    }

    //convert ones number to word
    if (numberAsString !== '0') {
        const onesAsWord = getWordMatchingOnesNumber(numberAsString);

        wordToReturn += " " + onesAsWord;
    }

    if (wordToReturn.endsWith(' and ')) {
        wordToReturn = wordToReturn.substr(0, wordToReturn.length - 5);
    }

    return wordToReturn.replace(/ +(?= )/g,'').trimLeft();
}

function getWordMatchingOnesNumber(singleDigitAsString){
    switch (singleDigitAsString) {
        case '1':
            return "one";
        case '2':
            return "two";
        case '3':
            return "three";
        case '4':
            return "four";
        case '5':
            return "five";
        case '6':
            return "six";
        case '7':
            return "seven";
        case '8':
            return "eight";
        case '9':
            return "nine";
        default:
            return "zero";
            break;
    }
}

function getWordMatchingTensNumber(tensDigitAsString) {
    switch (tensDigitAsString[0]) {
        case '1':
            return getWordMatchingTeensNumber(tensDigitAsString);
        case '2':
            return "twenty";
        case '3':
            return "thirty";
        case '4':
            return "forty";
        case '5':
            return "fifty";
        case '6':
            return "sixty";
        case '7':
            return "seventy";
        case '8':
            return "eighty";
        case '9':
            return "ninety";
        default:
            return "";
            break;
    }
}

function getWordMatchingTeensNumber(teensNumber) {
    switch (teensNumber) {
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        default:
            return 'ten';

    }
}

module.exports = convertNumberToWord;
