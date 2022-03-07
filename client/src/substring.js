function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }
    let cursorPosition = str.length + positionValue;
    // positionValue = 0;
    // leftArrow then positionValue--   --> must be bigger or eq than 0
    // rightArrow then positionValue++  --> must be less or eq than str.length

    let str = "This is a string";
    let cursor = "|";
    let stringToAdd = key;     //whatever key is being pressed;
    
    console.log(addStr(str, cursorPosition, stringToAdd)); //outPut : "This is a modified string"

export default addStr;