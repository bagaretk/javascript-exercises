const removeFromArray = function(array, ...elementToDeletes) {
    elementToDeletes.forEach(elementToDelete => {
        let index;
        while((index = array.indexOf(elementToDelete)) != -1){
            console.log(index);
            array.splice(index,1);
    }});
    
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
