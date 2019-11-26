const go = (direction, speed) => {
    if (speed <= 75) {
        return 'The car is moving ' + direction + ' at ' + speed + ' mph.'
    }
    else {
        return 'The car is moving ' + direction + ' at ' + speed + ' mph. SLOW DOWN!'
    }
}

export default go