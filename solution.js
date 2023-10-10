//1
function calculateBMI(weight, height){
    let result = weight / ( height / 100 * height / 100 );
    return result.toFixed(2);
}

//2
function whoIsBiggest(name1, name2, bmi1, bmi2){
    return bmi1>bmi2 ? name1 : name2;
}

//bonus
function whoIsBiggest2(name1, name2, weight1, weight2, height1, height2){
    let bmi1 = calculateBMI(weight1, height1);
    let bmi2 = calculateBMI(weight2, height2);
    return bmi1>bmi2 ? name1 : name2;
}

