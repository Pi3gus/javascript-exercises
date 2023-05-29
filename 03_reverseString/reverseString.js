const reverseString = function(text) {
    let reverseString = '';
    for(let i = text.length - 1; i >= 0; i--){
        reverseString += text[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
