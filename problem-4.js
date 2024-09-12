function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }
    if(typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean'){
        return 'Invalid Input';
    }
    if(obj.testScore < 0 || obj.testScore > 50 || obj.schoolGrade < 0 || obj.schoolGrade > 30){
        return 'Invalid Input';
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        finalScore = finalScore + 20;
    }
    if(finalScore < 80){
        return false;
    }
    return true;
}