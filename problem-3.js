function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    for(const char of name){
        if(!isNaN(char)){
            return true;
        }
    }
    return false;
}