const sumAll = function(start, end) {
    let output = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if(Math.min(start, end) > 0){
        for(let i = Math.min(start, end); i <= Math.max(start,end); i++){
            output += i;
        }
    }else{
        output = 'ERROR';
    }
    return output;
};
// Do not edit below this line
module.exports = sumAll;