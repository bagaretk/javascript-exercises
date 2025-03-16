const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyzx0123456789";
    const onlyCharacters = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
    let reversedString = onlyCharacters.split('').reverse().join('');

    return onlyCharacters === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
