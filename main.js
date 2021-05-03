const assert = require("assert");

function changeSingle(num) {
    const nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    if (num < 0) {
        return "Negative" + changeSingle(-num);
    }
    if (num < 10) {
        return nums[num];
    }
    return changeSingle((num - num%10) / 10) + nums[num%10];
}

function change(array) {
    let ans = "";
    array.forEach((num) =>{
        if (ans) {
            ans += ",";
        }
        ans += changeSingle(Number.parseInt(num));
    });
    return ans;
}

console.log(change(process.argv.slice(2)));