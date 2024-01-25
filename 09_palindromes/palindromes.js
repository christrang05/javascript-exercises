const palindromes = function(string) {
    const normalizedString = string.replace(/[\W_]/g, '').toLowerCase();
    const reversedString = normalizedString.split('').reverse().join('');

    return normalizedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
