module.exports = function numberToWord(intValueToConvert) {
    if (intValueToConvert < 1 || intValueToConvert > 9999) {
        return 'Number passed in is not in range';
    }

    const lessThanTwenty = ['','one','two','three','four','five','six','seven','eight','nine',
        'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    const tens = ['twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (intValueToConvert < 20) {
        return lessThanTwenty[intValueToConvert]
    } else if (intValueToConvert < 100) {
        return tens[intValueToConvert.toString()[0] - 2] + ' ' + lessThanTwenty[intValueToConvert.toString()[1]];
    } else if (intValueToConvert < 1000) {
        const hundredsValue = (lessThanTwenty[intValueToConvert.toString()[0]] + ' hundred and '
            + ((intValueToConvert.toString().substr(1,2) < 20)
                ? lessThanTwenty[parseInt(intValueToConvert.toString().substr(1,2))]
                : tens[intValueToConvert.toString()[1] - 2] + ' ' + lessThanTwenty[intValueToConvert.toString()[2]])).trimRight();
        return (hundredsValue.endsWith(' and') ? hundredsValue.substr(0, hundredsValue.length - 4) : hundredsValue);
    } else {
        const thousandsvalue = (lessThanTwenty[intValueToConvert.toString()[0]] + ' thousand and '
            + lessThanTwenty[intValueToConvert.toString()[1]] + ' hundred and '
            + ((intValueToConvert.toString().substr(2,2) < 20)
                ? lessThanTwenty[parseInt(intValueToConvert.toString().substr(2,2))]
                : tens[intValueToConvert.toString()[2] - 2] + ' ' + lessThanTwenty[intValueToConvert.toString()[3]]))
            .trimRight()
            .replace(/ +(?= )/g,'')
            .trimLeft()
            .replace(' and hundred', '');
        return (thousandsvalue.endsWith(' and') ? thousandsvalue.substr(0, thousandsvalue.length - 4) : thousandsvalue);
    }
};
