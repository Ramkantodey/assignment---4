function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }
    let totalTime = 0;
    for(const time of waitingTimes){
        totalTime = totalTime + time;
    }
    const averageTime = Math.round(totalTime / waitingTimes.length);
    const interviewsPending = (serialNumber - 1) - waitingTimes.length;
    const waitingTime = interviewsPending * averageTime;
    return waitingTime;
}