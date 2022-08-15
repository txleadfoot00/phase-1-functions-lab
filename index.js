function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
}
function distanceFromHqInFeet(someValue) {
    return 264*distanceFromHqInBlocks(someValue);
}
function distanceTravelledInFeet(start, destination) {
    return 264*Math.abs(start - destination);
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<=400) {
        return 0;
    }
    else if ((distanceTravelledInFeet(start, destination)<=2000)) {
        return .02*((distanceTravelledInFeet(start, destination)-400));
    }
    else if ((distanceTravelledInFeet(start, destination)<=2500)) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }}