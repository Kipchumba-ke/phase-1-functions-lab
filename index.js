// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const headQuarters = 42;
    return Math.abs(location - headQuarters)
    
}

//distance in feet
function distanceFromHqInFeet(location){
    const headQuarters = 42;
    return Math.abs((location - headQuarters) * 264)
    
}

//Distance travelled in feet
function distanceTravelledInFeet(location, destination){
    return Math.abs((destination - location) * 264)
    
}

//calculate fare prices
function calculatesFarePrice(location, destination){
    const inFeet = 264;
    const distanceInFeet =  Math.abs((destination - location) * inFeet)
    if (distanceInFeet <= 400){
        return 0;  
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet >2000 && distanceInFeet <=2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

