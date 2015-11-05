i = 1;
teamArray = [];
function recursive(numOfBrackets) {
    if (numOfBrackets <= 1) {
        console.log("Team " + i + " vs Team " + (i+1));
        teamArray.push(i, i+1);
        i += 2;
    } else {
        (recursive(numOfBrackets - 1) + recursive(numOfBrackets - 1));
    }
}

recursive(4);
