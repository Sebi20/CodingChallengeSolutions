/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();

    if(string.length == 1){
        return true;
    }

    
    let j = string.length - 1;

    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) != string.charAt(j)){
            return false;
        }

        j--;
    }

    return true;
};