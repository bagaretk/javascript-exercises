const sumAll = function(start, finish) {
    if(start < 0 || finish < 0){
        return "ERROR";
    }
    if(!Number.isInteger(start) || !Number.isInteger(finish)){
        return "ERROR";
    }

    if (start > finish){
        let aux = start;
        start = finish;
        finish = aux;
    }
    let sum=0;
    for(let i=start; i<=finish; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
