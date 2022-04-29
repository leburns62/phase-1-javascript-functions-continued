function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`;
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    return function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`;
    }
}